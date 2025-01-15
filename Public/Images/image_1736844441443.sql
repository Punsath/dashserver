-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 14, 2025 at 09:39 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employeems`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `image`, `date`, `description`) VALUES
(5, 'BLUECAP EDUCATION', 'image_1736674954345.jpeg', '2024-12-29', 'The BLUECAP team has successfully conducted 693 community \'Education and Awareness\' programs, training participants in effectively managing post-consumer plastics. These include: 409 school programs, 14 fishery community programs, 53 women\'s organization programs, 217 other community programs. Through these initiatives, 50,324 individuals were educated on the importance of responsible post-consumer plastic management and made aware of the negative impacts of plastic mismanagement on the environment. Additionally, the programs fostered the development of numerous entrepreneurs, empowering them to recover waste plastics and meet their daily needs sustainably. Over 100 new collection points were established across 15 designated districts, creating income opportunities for onboarded collection employees to support their daily needs through BLUECAP\'s plastic collection initiatives. As a result of these efforts, the initiatives collectively facilitated the recovery of 50,000 kilograms of pla'),
(6, 'WOMEN EMPOWERMENT', 'image_1736674998376.jpeg', '2024-12-20', 'A BLUECAP WARRIOR has emerged in the bustling coastal town of Beruwala, where the fishery communities are actively operating. Meet Anulawathi, known to many as Rani, a woman who cares for the boats day and night. Rani\'s connection to the beach began when the team NRC met her at the Beach Cleanup in early June. \"Now, my efforts in maintaining the beach are being recognized and valued by the community,\" says Rani. Initially, Team NRC empowered Rani with a fair collection incentive for the recyclable waste she collected. Recognizing her dedication and the need for sustained motivation, they later transitioned her package to a monthly salary with additional incentives and an insurance plan. This change not only increased her motivation but also uplifted her quality of life by providing greater financial stability and security. Every morning, before the sun rises, Rani can be seen walking along the shoreline, equipped with trash bags. Her routine is diligent and strategic: she starts at one'),
(7, 'WOMEN-OWNED MRF', 'image_1736675035113.png', '2024-12-15', 'Under the project BLUECAP, a state-of-the-art Material Recovery Facility (MRF) has been constructed in Balapitiya, boasting a monthly plastic waste recovery capacity of 30 MT. This cutting-edge facility features a sorting and baling area, a baling machine, electric collection vehicles, trash barriers, and numerous drop-off bins and bags. Ms. Yasomanike aims to tackle the region\'s plastic waste by collecting untapped plastic materials within a 10 km radius of the city. A significant part of this initiative focuses on community engagement and education, helping local communities and students recover their post-consumer plastic waste for recycling. To ensure active collections from households and polluted hotspots, an attractive incentive has been planned for all designated suppliers. As this project continues to grow, it holds the promise of a cleaner, healthier environment for the residents of Balapitiya and sets a powerful example for other regions to follow.'),
(8, 'BLUECAP WARRIORS', 'image_1736675081376.jpeg', '2024-12-10', 'A young man’s mission to clean the coastline in Kalutara District is an inspiring story of action amid global environmental concerns. This tale centers on Chalana, a passionate environmentalist who has taken the initiative to clean waste plastic from the coastline using e-bikes. Traversing the coastline daily, Chalana collects plastic waste to prevent it from harming marine life or polluting the beautiful beaches. His unique approach has gained growing community support and increased awareness of the plastic pollution crisis. \"I aim to collaborate with local organizations and schools to educate others about the importance of environmental conservation and the practical steps they can take to contribute,\" says Chalana. With his dedication and vision, Chalana plans to expand his efforts, offering hope and setting an example for environmental action.'),
(9, 'MRF UPDATES', 'image_1736675169805.jpeg', '2024-12-05', 'Sri Lanka Tourism Promotion Bureau (SLTPB), under The Ministry of Tourism and Lands, welcomed the world\'s top travel influencer Nusier Yassin, also known as \"Nas Daily,\" to promote Sri Lanka as one of the best travel destinations in the world. As part of this exclusive social media-based campaign with Sri Lanka Tourism Promotion Bureau, Nas Daily\'s social platforms, which have over 67 million followers worldwide, will be posting various destination promotional posts, videos, and stories to inspire social media-savvy global travelers to visit Sri Lanka in the upcoming seasons. Making a statement on Sri Lanka Tourism’s collaboration with Nas Daily, Minister for Tourism and Lands Mr. Harin Fernando stated that the key focus of this campaign is to promote destination Sri Lanka via mainstream social media platforms, reaching out to millions of international social media users and creating excitement and influence to visit the island within the upcoming seasons. The campaign also expects to ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
