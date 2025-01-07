import LoginForm from "./form/LoginForm";

const AuthContainer = () => {
  return (
    <section className="flex flex-col justify-center text-black gap-8">
      <div>
        <h1 className="text-3xl font-semibold leading-tight">
          Your journey starts here. <br />
          Log in to begin your adventure!
        </h1>
      </div>
      <LoginForm />
    </section>
  );
};

export default AuthContainer;
