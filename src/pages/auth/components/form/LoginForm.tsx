import Button from "@shared/components/button/Button";
import Input from "@shared/components/input/Input";
import Loader from "@shared/components/loader/Loader";
import { useAuth } from "@shared/hooks/useAuth";
import { ILoginSchema, loginSchema } from "@shared/models/schemas/loginSchema";
import { ChangeEvent, FormEvent, useState } from "react";
import { z } from "zod";

const LoginForm = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { login } = useAuth();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    try {
      const validate: ILoginSchema = loginSchema.parse(form);
      if (validate) {
        await login(validate);
      }
      setLoading(false);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError("Something went wrong");
      }
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <form onSubmit={handleLogin} className="space-y-3">
      <Input
        placeholder="eg. johndoe@gmail.com"
        id="username"
        name="Username"
        onChange={handleChange}
      />
      <Input
        placeholder="**********"
        id="password"
        name="Password"
        type="password"
        onChange={handleChange}
      />
      {error && <p className="text-red-500">{error}</p>}
      <div className="w-full flex justify-end pt-2">
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
