import React from "react";

import { Card, IconButton, Input, Navbar } from "@material-tailwind/react";

import { Menu, Home, Store, User } from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

import LOGO from "../assets/logos/Simbolo02.png";
import LOGOBIG from "../assets/logos/LogoOF02.png";
import { SidebarItem } from "./components/SidebarItem";
import { NavItems } from "./components/NavItems";
import { UseLogout } from "../hooks/UseLogout";

interface ILayoutProps {
  children: React.ReactNode;
}

const pathsToHideNav = ["/establishment/register"];

function Layout({ children }: ILayoutProps): JSX.Element {
  //const [isSideOpen, setIsSideOpen] = React.useState(true);
  const [isSideOpen, setIsSideOpen] = React.useState(() => {
    const storedState = localStorage.getItem("isSideOpen");
    return storedState ? JSON.parse(storedState) : true;
  });
  const location = useLocation();
  const navigate = useNavigate();
  const shouldHideNav = pathsToHideNav.includes(location.pathname);

  React.useEffect(() => {
    localStorage.setItem("isSideOpen", JSON.stringify(isSideOpen));
  }, [isSideOpen]);

  const onBurgerClick = () => {
    setIsSideOpen(!isSideOpen);
  };

  return (
    <>
      <section className="w-screen h-screen overflow-hidden bg-[#F9F9F9] flex gap-4 pt-4 pl-4 pr-4">
        <aside
          className={`h-[calc(100vh-2rem)] transition-all rounded-md sticky ${isSideOpen ? "w-[30rem]" : "w-[6rem]"}`}
        >
          <Card placeholder="" className="w-full p-4 h-full transition-all">
            <div
              className={`justify-between transition-all flex ${isSideOpen ? "h-[4rem]" : "flex-col items-center gap-4 h-fit"}`}
            >
              {isSideOpen ? (
                <>
                  <img
                    className="cursor-pointer hover:scale-75 transition-all max-h-[4rem] animate-fade-in-down"
                    src={LOGOBIG}
                    onClick={() => navigate("/home")}
                  />
                </>
              ) : (
                <>
                  <img
                    src={LOGO}
                    className="cursor-pointer hover:scale-75 h-full max-h-[3rem] max-w-[3.5rem] transition-all animate-fade-in-down"
                    onClick={() => navigate("/home")}
                  />
                </>
              )}
              <IconButton
                placeholder=""
                variant="text"
                onClick={() => onBurgerClick()}
              >
                <Menu />
              </IconButton>
            </div>

            <div
              id="labels-container"
              className="mt-4 flex items-center justify-center"
            >
              <ul className="w-full flex flex-col ">
                <SidebarItem
                  icon={<Home />}
                  path="home"
                  label="Home"
                  hide={!isSideOpen}
                />

                <hr className="my-4" />

                <UseLogout isSideOpen={isSideOpen} />
              </ul>
            </div>
          </Card>
        </aside>

        <main className="w-full h-full flex flex-col gap-4">
          {!shouldHideNav && (
            <Navbar
              placeholder=""
              className={
                "z-10 mx-auto max-w-screen-3xl animate-fade-in-down h-fit p-2"
              }
            >
              <div className="mx-auto flex text-blue-gray-900 justify-between items-center">
                <span className="min-w-[30%] ">
                  <Input
                    placeholder=""
                    label="Buscar"
                    crossOrigin=""
                    disabled
                  />
                </span>

                <NavItems />
              </div>
            </Navbar>
          )}
          <article className="w-full h-full overflow-y-scroll flex flex-col gap-4">
            {children}
          </article>
        </main>
      </section>
    </>
  );
}

export { Layout };
