import React from "react";

import { Button, Img, Input, Text, TextArea } from "components";
import React, { useState } from 'react';
import { criarusuario } from 'ApiCalls';

const CriaadeusurioPage = () => {

  const [userData, setUserData] = useState({
    nome: '',
    telefone: '',
    email: '',
    cpf: '',
    username: '',
    password: '',
  });
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await criarusuario(userData);
      setApiResponse(response);
      setApiResult(response);
    } catch (error) {
      setApiResponse('Erro ao chamar a API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-blue-100 font-inter h-[832px] mx-auto p-0.5 relative w-full">
        <div className="absolute h-[828px] inset-[0] justify-center m-auto max-w-[1186px] md:px-5 w-full">
          <div className="h-[828px] m-auto w-full">
            <Img
              className="h-[828px] m-auto object-cover w-full"
              src="images/img_image1.png"
              alt="imageOne"
            />
            <div className="absolute flex flex-col gap-[5px] inset-x-[0] items-center justify-start mx-auto top-[6%]">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtInterExtraBold30"
              >
                Criação de usuário
              </Text>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtInterExtraBold30"
              >
                Preencha os dados abaixo!
              </Text>
            </div>
          </div>
           <Button
        onClick={handleFormSubmit}
        className="absolute bottom-[16%] cursor-pointer font-extrabold inset-x-[0] leading-[normal] min-w-[217px] mx-auto text-center text-xs"
        disabled={loading}
      >
        Criar usuário
      </Button>
          <div className="absolute flex flex-col items-start justify-start left-[0] rounded-[10px] shadow-bs top-[28%] w-[44%]">
            <Text className="text-black-900 text-xs" size="txtInterExtraBold12">
              Nome
            </Text>
            <Input
              name="rectangleFive"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-black-900 border-solid flex h-[39px] mt-1 w-full"
              value={userData.nome}
              onChange={handleInputChange}
            ></Input>
          </div>
          <div className="absolute flex flex-col items-start justify-start left-[0] rounded-[10px] shadow-bs top-[35%] w-[44%]">
            <Text className="text-black-900 text-xs" size="txtInterExtraBold12">
              Usuário
            </Text>
            <Input
              name="rectangleSix"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-black-900 border-solid flex h-[39px] mt-[3px] w-full" 
              value={userData.username}
              onChange={handleInputChange}
            ></Input>
          </div>
          <div className="absolute flex flex-col items-start justify-start left-[0] rounded-[10px] shadow-bs top-[42%] w-[44%]">
            <Text className="text-black-900 text-xs" size="txtInterExtraBold12">
              CPF
            </Text>
            <Input
              name="rectangleSeven"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-black-900 border-solid flex h-[39px] mt-0.5 w-full"
              value={userData.cpf}
              onChange={handleInputChange}
            ></Input>
          </div>
          <div className="absolute bottom-[44%] flex flex-col items-start justify-start left-[0] rounded-[10px] shadow-bs w-[44%]">
            <Text className="text-black-900 text-xs" size="txtInterExtraBold12">
              Senha
            </Text>
            <Input
              name="rectangleEight"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-black-900 border-solid flex h-[39px] mt-0.5 w-full"
              
  value={userData.password}
  onChange={handleInputChange}
            ></Input>
          </div>
          <div className="absolute bottom-[36%] flex flex-col gap-[5px] items-start justify-start left-[0] rounded-[10px] shadow-bs w-[44%]">
            <Text className="text-black-900 text-xs" size="txtInterExtraBold12">
              Telefone
            </Text>
            <Input
              name="rectangleNine"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-black-900 border-solid flex h-[39px] w-full"
              value={userData.telefone}
              onChange={handleInputChange}
            ></Input>
          </div>
          <div className="absolute bottom-[28%] flex flex-col gap-2 items-start justify-start left-[0] rounded-[10px] shadow-bs w-[44%]">
            <Text className="text-black-900 text-xs" size="txtInterExtraBold12">
              E-mail
            </Text>
            <Input
              name="rectangleTen"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-black-900 border-solid flex h-[39px] w-full"
              value={userData.email}
              onChange={handleInputChange}
            ></Input>
          </div>
          <Text
            className="absolute right-[39%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 top-[16%]"
            size="txtInterExtraBold30"
          >
            Resultado
          </Text>
        </div>
        <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto md:px-5 right-[3%] w-[47%]">
          <Text
            className="text-white-A700 text-xs"
            size="txtInterExtraBold12WhiteA700"
          >
            Resultado
          </Text>
          <TextArea
  className="placeholder:bg-gray-100 bg-gray-100 border border-black-900 border-solid rounded-[10px] w-full"
  name="rectangleFive_One"
  placeholder=""
  value={apiResult} // Exiba o resultado da API no TextArea
  readOnly
></TextArea>
        </div>
      </div>
    </>
  );
};

export default CriaadeusurioPage;
