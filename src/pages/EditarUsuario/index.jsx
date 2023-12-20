import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text, TextArea } from "components";

const CriaodeusurioresultadoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue-100 font-inter h-[832px] mx-auto p-0.5 relative w-full">
        <div className="absolute h-[828px] inset-[0] justify-center m-auto max-w-[1186px] md:px-5 w-full">
          <Img
            className="h-[828px] m-auto object-cover w-full"
            src="images/img_image1.png"
            alt="imageOne"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[98px] h-max inset-y-[0] justify-start left-[1%] my-auto w-[59%]">
            <Text
              className="md:ml-[0] ml-[442px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtInterExtraBold30"
            >
              Editar Usuário
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start rounded-[10px] shadow-bs w-[74%] md:w-full">
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
              <div className="flex flex-col items-start justify-start mt-0.5 rounded-[10px] shadow-bs w-[74%] md:w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtInterExtraBold12"
                >
                  Nome
                </Text>
                <Input
                  name="rectangleFive_One"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900 border-solid flex h-[39px] mt-1 w-full"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-0.5 rounded-[10px] shadow-bs w-[74%] md:w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtInterExtraBold12"
                >
                  Usuário
                </Text>
                <Input
                  name="rectangleSix"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900 border-solid flex h-[39px] mt-[3px] w-full"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-1 rounded-[10px] shadow-bs w-[74%] md:w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtInterExtraBold12"
                >
                  CPF
                </Text>
                <Input
                  name="rectangleSeven"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900 border-solid flex h-[39px] mt-0.5 w-full"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start rounded-[10px] shadow-bs w-[74%] md:w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtInterExtraBold12"
                >
                  Senha
                </Text>
                <Input
                  name="rectangleEight"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900 border-solid flex h-[39px] mt-0.5 w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start mt-1 rounded-[10px] shadow-bs w-[74%] md:w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtInterExtraBold12"
                >
                  Telefone
                </Text>
                <Input
                  name="rectangleNine"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900 border-solid flex h-[39px] w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mt-[7px] rounded-[10px] shadow-bs w-[74%] md:w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtInterExtraBold12"
                >
                  Número
                </Text>
                <Input
                  name="rectangleTen"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900 border-solid flex h-[39px] w-full"
                ></Input>
              </div>
              <Button
                className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[217px] md:ml-[0] ml-[473px] mt-[57px] text-center text-xs"
                onClick={() => navigate("/criaadeusurio")}
              >
                Editar usuário
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto md:px-5 right-[3%] w-[47%]">
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtInterExtraBold30"
          >
            Resultado
          </Text>
          <TextArea
            className="placeholder:bg-gray-100 bg-gray-100 border border-black-900 border-solid rounded-[10px] w-full"
            name="rectangleFive_Two"
            placeholder=""
          ></TextArea>
        </div>
      </div>
    </>
  );
};

export default CriaodeusurioresultadoPage;
