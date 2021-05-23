document.addEventListener('DOMContentLoaded', replaceScrollBox);
document.addEventListener('DOMContentLoaded', addBullets);

myFaves = {
    'allies' : {
        'titles' : ['Geno - Super Mario RPG', 'Jolene - Paper Mario: The Thousand-Year Door', 'Bowser - Super Mario RPG', 'Pauline - Super Mario Odyssey', 'Flurrie - Paper Mario: The Thousand-Year Door'],
        'imgs' : ['geno.png', 'Jolene.jpg', 'Bowser_rpg.png', 'Pauline.jpg', 'Flurrie.png'],
        'links' : ["https://www.mariowiki.com/Geno", "https://www.mariowiki.com/Jolene", "https://www.mariowiki.com/Bowser", "https://www.mariowiki.com/Pauline", "https://www.mariowiki.com/Flurrie"],
        'attributions' : ["https://www.mariowiki.com/Geno#/media/File:Genosmrpg.png", "https://www.mariowiki.com/Jolene#/media/File:PM2_Jolene.jpg", "https://www.seekpng.com/ima/u2q8w7a9e6u2e6t4/", "https://nintendo.fandom.com/wiki/Pauline?file=Super_Mario_Odyssey_-_Photo_artwork_04.jpg", "https://www.mariowiki.com/Flurrie#/media/File:PMTTYD_Flurrie_and_Heart_Artwork.png"]
    },
    'baddies' : {
        'titles' : ['Big Boo', 'Fryguy', 'Chain Chomp', 'Reznor', "Shoe Goomba"],
        'imgs' : ['BigBoo.png', 'Fryguy.jpg', 'chainChompGif.gif', 'Reznor.gif', 'shoegoomba.jpg'],
        'links' : ["https://www.mariowiki.com/Big_Boo", "https://www.mariowiki.com/Fryguy", "https://www.mariowiki.com/Chain_Chomp","https://www.mariowiki.com/Reznor", "https://www.mariowiki.com/Shoe_Goomba"],
        'attributions' : ["https://www.mariowiki.com/Gallery:Big_Boo#/media/File:BigBoo_SMW.png", "https://www.mariowiki.com/Fryguy#/media/File:SMUSA_Fryguy_Artwork.jpg", "https://www.mariowiki.com/Super_Mario_Bros._3#/media/File:Ani_smb3_chainchomp.gif", "https://www.mariowiki.com/Reznor#/media/File:SMW_Reznor.gif", "https://aminoapps.com/c/mario/page/blog/pokemario-bros-dex-214-winged-shoe-goomba/G5XU_nu0bnnkoXLlqd7pwGwZ3dpvb3Q"]
    },
    'powerups' : {
        'titles' : ['Feather', 'Tanooki Suit', 'Hammer Suit', "Goomba's Shoe", 'P-Wing'],
        'imgs' : ['SMW_Cape_Feather.jpg', 'TanookiSuit.png', 'HammerMario.png', 'marioshoe.gif', 'pwing.png'],
        'links' : ["https://www.mariowiki.com/Cape_Feather", "https://www.mariowiki.com/Tanooki_Suit", "https://www.mariowiki.com/Hammer_Suit", "https://www.mariowiki.com/Goomba%27s_Shoe", "https://www.mariowiki.com/P-Wing"],
        'attributions' : ["https://www.mariowiki.com/Cape_Feather#/media/File:SMW_Cape_Feather.jpg", "https://www.mariowiki.com/Tanooki_Suit#/media/File:Tanooki_Mario_SMB3_art.png", "https://www.mariowiki.com/Hammer_Suit#/media/File:Hammer_Mario_SMB3.png", "https://nintendo.fandom.com/wiki/Goomba%27s_Shoe", "https://www.mariowiki.com/List_of_power-ups#/media/File:PWingSMB3.png"]
    },
    'games' : {
        'titles' : ['Super Mario World', 'Super Mario RPG', 'Super Mario Land 2', 'Super Mario All-Stars', 'Mario Paint'],
        'imgs' : ['SMW.png', 'SMRPG.png', 'SML2.jpg', 'SMAS.jpg', 'MP.jpg'],
        'links' : ["https://www.mariowiki.com/Super_Mario_World", "https://www.mariowiki.com/Super_Mario_RPG:_Legend_of_the_Seven_Stars", "https://www.mariowiki.com/Super_Mario_Land_2:_6_Golden_Coins", "https://www.mariowiki.com/Super_Mario_All-Stars", "https://www.mariowiki.com/Mario_Paint"],
        'attributions' : ["https://www.mariowiki.com/Super_Mario_World#/media/File:Super_Mario_World_Box.png", "https://www.mariowiki.com/Super_Mario_RPG:_Legend_of_the_Seven_Stars#/media/File:Super_Mario_RPG_Box.png", "https://www.mariowiki.com/Super_Mario_Land_2:_6_Golden_Coins#/media/File:Supermarioland2logo.jpg", "https://www.mariowiki.com/Super_Mario_All-Stars#/media/File:SMAS.jpg", "https://www.mariowiki.com/Mario_Paint"]
    }
}

top5Info = {
    'peach' : {
        'labels' : ['Full name', 'Year introduced', 'First game', 'Species'],
        'facts' : ['Princess Peach Toadstool', '1985', 'Super Mario Bros.', 'Human']
    },
    'luigi' : {
        'labels' : ['Full name', 'Year introduced', 'First game', 'Species'],
        'facts' : ['Luigi Mario', '1983', 'Mario Bros. (Game & Watch)', 'Human']
    },
    'toad' : {
        'labels' : ['Full name', 'Year introduced', 'First game', 'Species'],
        'facts' : ['Toad', '1988', 'Super Mario Bros. 2', 'Toad']
    },
    'yoshi' : {
        'labels' : ['Full name', 'Year introduced', 'First game', 'Species'],
        'facts' : ['Yoshi', '1990', 'Super Mario World', 'Yoshi']
    },
    'rosalina' : {
        'labels' : ['Full name', 'Year introduced', 'First game', 'Species'],
        'facts' : ['Princess Rosalina', '2007', 'Super Mario Galaxy', 'Human']
    },
    'bowser' : {
        'labels' : ['Full name', 'Year introduced', 'First game', 'Species'],
        'facts' : ['King Bowser Koopa', '1985', 'Super Mario Bros.', 'Koopa']
    },
    'goomba' : {
        'labels' : ['Year introduced', 'First game', 'Species'],
        'facts' : ['1985', 'Super Mario Bros.', 'Goomba']
    },
    'koopatroopa' : {
        'labels' : ['Year introduced', 'First game', 'Species'],
        'facts' : ['1985', 'Super Mario Bros.', 'Koopa']
    },
    'wario' : {
        'labels' : ['Full name', 'Year introduced', 'First game', 'Species'],
        'facts' : ['Wario', '1992', 'Super Mario Land 2', 'Human']
    },
    'kamek' : {
        'labels' : ['Full name', 'Year introduced', 'First game', 'Species'],
        'facts' : ['Kamek', '1995', "Super Mario World 2: Yoshi's Island", 'Magikoopa']
    },
    'mushroom' : {
        'labels' : ['Year introduced', 'First game', 'Ability'],
        'facts' : ['1985', 'Super Mario Bros.', 'Commonly transforms consumer from small to super form']
    },
    '1up' : {
        'labels' : ['Year introduced', 'First game', 'Ability'],
        'facts' : ['1985', 'Super Mario Bros.', 'Gives consumer an extra life']
    },
    'fireflower' : {
        'labels' : ['Year introduced', 'First game', 'Ability'],
        'facts' : ['1985', 'Super Mario Bros.', 'Allows user to throw fireballs']
    },
    'leaf' : {
        'labels' : ['Year introduced', 'First game', 'Ability'],
        'facts' : ['1988', 'Super Mario Bros. 3', 'Turns user into a raccoon capable of flight']
    },
    'star' : {
        'labels' : ['Year introduced', 'First game', 'Ability'],
        'facts' : ['1985', 'Super Mario Bros.', 'Grants user invincibility']
    },
    'smb' : {
        'labels' : ['Year introduced', 'Console', 'Copies sold', 'World map'],
        'facts' : ['1985', 'Nintendo Entertainment System', 'Over 40 million', '<a href="/img/SMB_World_1.png" download>Download World 1 map!</a>']
    },
    'smb3' : {
        'labels' : ['Year introduced', 'Console', 'Copies sold', 'World map'],
        'facts' : ['1990', 'Nintendo Entertainment System', 'Over 17 million', '<a href="/img/SMB3_World_3_map.png" download>Download World 3 map!</a>']
    },
    'smw' : {
        'labels' : ['Year introduced', 'Console', 'Copies sold', 'World map'],
        'facts' : ['1991', 'Super Nintendo Entertainment System', 'Over 20 million', '<a href="/img/Dinosaur_Land_SMW_map.png" download>Download world map!</a>']
    },
    'sm64' : {
        'labels' : ['Year introduced', 'Console', 'Copies sold', 'World map'],
        'facts' : ['1996', 'Nintendo 64', 'Over 11 million', '<a href="/img/SM64_World_7_map.png" download>Download World 7 map!</a>']
    },
    'mk64' : {
        'labels' : ['Year introduced', 'Console', 'Copies sold', 'World map'],
        'facts' : ['1997', 'Nintendo 64', 'Almost 10 million', '<a href="/img/MK64_Rainbow_Road_Overview.png" download>Download Rainbow Road map!</a>']
    }
}

function replaceScrollBox(){
    document.getElementById('favSubmit').addEventListener('click', function(event){
        var newHeading = document.createElement('h4');
        newHeading.textContent = "Awesome! My faves are:";
        var scrollBox = document.getElementsByClassName('ScrollBox')[0];
        var form = scrollBox.getElementsByTagName('form')[0];  //
        document.body.appendChild(form);  //
        form.style = "display: none"; // had to add this and the previous two lines to circumvent the error: "Form submission canceled because the form is not connected"
        scrollBox.textContent = '';
        scrollBox.appendChild(newHeading);
        let i = 0;
        for (img of myFaves[scrollBox.id].imgs){ 
            var image = document.createElement('img');
            var figure = document.createElement('figure');
            var a = document.createElement('a');
            a.href = myFaves[scrollBox.id].links[i];
            var title = document.createElement('h4');
            var caption = document.createElement('figcaption');
            a.appendChild(title);
            figure.appendChild(a);
            scrollBox.appendChild(figure);
            figure.appendChild(image);
            figure.appendChild(caption);
            image.src = "/img/" + myFaves[scrollBox.id].imgs[i];
            title.textContent = myFaves[scrollBox.id].titles[i];
            caption.textContent = myFaves[scrollBox.id].attributions[i];
            var spacer = document.createElement('img');
            spacer.src = "/img/SMB3_BigKoopaTroopaGreen.gif";
            scrollBox.appendChild(spacer);
            i++;
        }
        
        event.preventDefault();
    })
}

function addBullets(imgNode){
    var figure = imgNode.parentNode;
    var infoBox = imgNode.nextElementSibling.nextElementSibling;
    infoBox.textContent = "";
    var newList = document.createElement('ul');
    infoBox.appendChild(newList);
    var i = 0;
    for (label of top5Info[figure.id]['labels']){
        var fact = document.createElement('li');
        fact.innerHTML = "<b>" + label + ":</b> " + top5Info[figure.id]['facts'][i];
        setTimeout(addBulletDelay, 400*i, newList, fact);
        i++;
    }
}

function addBulletDelay(newList, fact){
    newList.appendChild(fact);
}

function removeBullets(imgNode){
    var infoBox = imgNode.nextElementSibling.nextElementSibling;
    var listNode = infoBox.firstElementChild;
    infoBox.removeChild(listNode);
}