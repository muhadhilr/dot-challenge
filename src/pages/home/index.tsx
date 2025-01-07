import Modal from "@shared/components/modal/Modal";
import HomeContainer from "./components/HomeContainer";
import AuthPage from "@pages/auth";
import { useAuth } from "@shared/hooks/useAuth";

const Homepage = () => {
  const { isAuth } = useAuth();

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
