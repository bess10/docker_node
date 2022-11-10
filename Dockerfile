#imagen base del sistema operativo
FROM  node:19

#Directorio de trabajo de la aplicación
WORKDIR /app

COPY package*.json ./

RUN npm install

#COPY /src /app/
COPY . .

CMD [ "npm", "start" ]