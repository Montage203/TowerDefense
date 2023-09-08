
// Variables pour le canvas et le contexte
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Taille du canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Créez un objet pour représenter la tour
const tower = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 50,
    height: 50,
    color: 'lime',
    shoot: function() {
        // Logique de tir de la tour
        // Par exemple, créer un projectile et le faire avancer
    }
};

// Créez un tableau pour stocker les ennemis
const enemies = [];

// Fonction pour créer un ennemi
function createEnemy() {
    const enemy = {
        x: Math.random() * canvas.width,
        y: 0,
        width: 30,
        height: 30,
        color: 'red',
        move: function() {
            // Logique de déplacement de l'ennemi
            // Par exemple, faites-le avancer vers le bas
        }
    };
    enemies.push(enemy);
}

// Fonction pour dessiner la tour
function drawTower() {
    ctx.fillStyle = tower.color;
    ctx.fillRect(tower.x, tower.y, tower.width, tower.height);
}

// Fonction pour dessiner les ennemis
function drawEnemies() {
    enemies.forEach(enemy => {
        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });
}

// Fonction principale de jeu
function gameLoop() {
    // Effacez le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Créez un nouvel ennemi de manière aléatoire
    if (Math.random() < 0.02) {
        createEnemy();
    }

    // Déplacez et dessinez la tour
    drawTower();

    // Déplacez et dessinez les ennemis
    enemies.forEach(enemy => {
        enemy.move();
    });
    drawEnemies();

    // Vérifiez les collisions entre les tours et les ennemis

    // Boucle de jeu
    requestAnimationFrame(gameLoop);
}

// Lancez la boucle de jeu
gameLoop();
