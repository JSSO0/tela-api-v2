import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text, TextArea } from "components";

const BuscarusurioPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue-100 font-inter h-[832px] mx-auto p-0.5 relative w-full">
        <Img
          className="h-[828px] m-auto max-w-[1186px] object-cover w-full"
          src="images/img_image1.png"
          alt="imageOne"
        />
        <div className="absolute flex flex-col gap-5 inset-x-[0] items-center justify-start mx-auto md:px-5 top-[8%] w-[47%]">
          <div className="flex flex-col gap-7 justify-start w-[86%] md:w-full">
            <Text
              className="md:ml-[0] ml-[115px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtInterExtraBold30"
            >
              Editar Usuário
            </Text>
            <div className="flex flex-col items-start justify-start rounded-[10px] shadow-bs w-full">
              <Text
                className="text-black-900 text-xs"
                size="txtInterExtraBold12"
              >
                ID
              </Text>
              <Input
                name="rectangleFive"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="border border-black-900 border-solid flex h-[39px] mt-1 w-full"
              ></Input>
            </div>
            <Button
              className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[217px] mx-auto text-center text-xs"
              onClick={() => navigate("/criaadeusurio")}
            >
              Buscar usuário
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtInterExtraBold30"
            >
              Resultado
            </Text>
            <TextArea
              className="placeholder:bg-gray-100 bg-gray-100 border border-black-900 border-solid rounded-[10px] w-full"
              name="rectangleFive_One"
              placeholder=""
            ></TextArea>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuscarusurioPage;
