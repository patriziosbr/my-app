CREATE TABLE IF NOT EXISTS `watched` (
  `id` int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `watched` boolean NOT NULL,
  `imgUrl` text NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp
);
-- CREATE TABLE IF NOT EXISTS `captured` (
--   `id` int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--   `name` varchar(255) NOT NULL,
--   `captured` boolean NOT NULL,
--   `imgUrl` text NOT NULL,
--   `types` varchar(255) NOT NULL,
--   `created_at` timestamp,
--   `updated_at` timestamp
-- );