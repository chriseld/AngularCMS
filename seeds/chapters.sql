CREATE TABLE `chapters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookId` int NOT NULL,
  `chapterText` longblob NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
