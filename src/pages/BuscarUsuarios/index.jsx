import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text, TextArea } from "components";

const BuscarusuriosPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue-100 font-inter h-[832px] mx-auto p-0.5 relative w-full">
        <Img
          className="h-[828px] m-auto max-w-[1186px] object-cover w-full"
          src="images/img_image1.png"
          alt="imageOne"
        />
        <div className="absolute flex flex-col gap-9 inset-x-[0] items-center justify-start mx-auto md:px-5 top-[8%] w-1/5">
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtInterExtraBold30"
          >
            Buscar Usuários
          </Text>
          <Button
            className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[217px] text-center text-xs"
            onClick={() => navigate("/criaadeusurio")}
          >
            Buscar usuários
          </Button>
        </div>
        <div className="absolute bottom-[12%] flex flex-col inset-x-[0] justify-start max-w-[1186px] mx-auto md:px-5 w-full">
          <Text
            className="ml-2.5 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtInterExtraBold30"
          >
            Resultado
          </Text>
          <TextArea
            className="placeholder:bg-gray-100 bg-gray-100 border border-black-900 border-solid rounded-[10px] w-full"
            name="rectangleFive"
            placeholder=""
          ></TextArea>
        </div>
      </div>
    </>
  );
};

export default BuscarusuriosPage;
