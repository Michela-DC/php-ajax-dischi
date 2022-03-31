<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Dischi</title>
</head>
<body>

    <header>
        <div class="header-container">
            <figure class="logo-wrapper">
                <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Spotify.png/600px-Spotify.png" alt="">
            </figure>
        </div> 
    </header>

    <main>
        <div class="main-container">

            <ul class="cards-container">
                <?php
                include __DIR__ . '/partials/array_discs.php';
    
                foreach($discs as $disc => $album){
                    ?>
                    <li class="card-wrapper">
                        <figure class="poster">
                            <img class="poster-img" src="<?php echo $album['poster']; ?>" alt="">
                        </figure>
    
                        <div class="album-info">
                            <h4 class="title">
                                <?php echo $album['title']; ?>
                                <!-- {{objectAlbum.title}} -->
                            </h4>
                            <div class="author">
                                <?php echo $album['author']; ?>
                                <!-- {{objectAlbum.author}} -->
                            </div>
                            <div class="genre">
                                <?php echo $album['genre']; ?>
                                <!-- {{objectAlbum.genre}} -->
                            </div>
                            <div class="year">
                                <?php echo $album['year']; ?>
                                <!-- {{objectAlbum.year}}   -->
                            </div>
                        </div>
                    </li>
                    <?php
                }
                ?>
            </ul>
        </div>
    </main>

</body>
</html>