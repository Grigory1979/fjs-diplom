import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = () => {
  return new DocumentBuilder()
    .setTitle("Дипломный проект на курсе Fullstack-разработчик на JavaScript»")
    .setDescription(
      "Cайт-агрегатор просмотра и бронирования гостиниц",
    )
    .setVersion("1.0")
    .build();
};