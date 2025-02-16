import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = () => {
  return new DocumentBuilder()
    .setTitle("Дипломный проект на курсе «fullstack-разработка на Node.js»")
    .setDescription(
      "Дипломный проект представляет собой сайт-агрегатор просмотра и бронирования гостиниц.",
    )
    .setVersion("1.0")
    .build();
};
