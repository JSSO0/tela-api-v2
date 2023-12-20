import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const MenuInicialPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue-100 font-inter h-[832px] mx-auto p-0.5 relative w-full">
        <Img
          className="h-[828px] m-auto max-w-[1186px] object-cover w-full"
          src="images/img_image1.png"
          alt="imageOne"
        />
        <div className="absolute flex flex-col md:gap-10 gap-[103px] justify-start md:px-5 right-[11%] top-[6%] w-3/4">
          <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[209px]">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtInterExtraBold30"
            >
              Bem vindo a API Joely
            </Text>
            <Text
              className="mb-[3px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtInterExtraBold30"
            >
              Hora de escolher o que vai fazer!
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
            <Button
              className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[217px] text-center text-xs"
              onClick={() => navigate("")}
            >
              Criar usuário
            </Button>
            <Button
              className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[217px] text-center text-xs"
              onClick={() => navigate("")}
            >
              Editar usuário
            </Button>
            <Button
              className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[217px] text-center text-xs"
              onClick={() => navigate("")}
            >
              Buscar usuários
            </Button>
            <Button
              className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[217px] text-center text-xs"
              onClick={() => navigate("")}
            >
              Buscar usuário
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuInicialPage;
