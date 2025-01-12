import Modal from "@shared/components/modal/Modal";
import HomeContainer from "./components/HomeContainer";
import AuthPage from "@pages/auth";
import { useAuth } from "@shared/hooks/useAuth";
import { useEffect, useState } from "react";
import Loader from "@shared/components/loader/Loader";

const Homepage = () => {
  const { isAuth } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!isAuth ? (
        <Modal isOpen={true} onClose={() => {}} isFixed={true}>
          <AuthPage />
        </Modal>
      ) : (
        <HomeContainer />
      )}
    </>
  );
};

export default Homepage;
