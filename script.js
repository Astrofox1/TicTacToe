const tds = document.querySelectorAll("td");
let currentPlayer = 'X';

tds.forEach(td => {
    td.addEventListener('click', (e) => {
        const click = e.target;
        if (click.tagName === 'TD' && click.innerText === '') {
            click.innerText = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            const row = click.parentNode.rowIndex;
            const cell = click.cellIndex;
            console.log(`Clicked on Row ${row + 1}, Cell ${cell + 1}`);

            if (
                (tds[0].innerText === 'X' && tds[1].innerText === 'X' && tds[2].innerText === 'X') ||
                (tds[3].innerText === 'X' && tds[4].innerText === 'X' && tds[5].innerText === 'X') ||
                (tds[6].innerText === 'X' && tds[7].innerText === 'X' && tds[8].innerText === 'X') ||
                (tds[0].innerText === 'X' && tds[4].innerText === 'X' && tds[8].innerText === 'X') ||
                (tds[2].innerText === 'X' && tds[4].innerText === 'X' && tds[6].innerText === 'X') ||
                (tds[0].innerText === 'X' && tds[3].innerText === 'X' && tds[6].innerText === 'X') ||
                (tds[1].innerText === 'X' && tds[4].innerText === 'X' && tds[7].innerText === 'X') ||
                (tds[2].innerText === 'X' && tds[5].innerText === 'X' && tds[8].innerText === 'X')
            ) {
                alert("You win!");
            } else if (
                (tds[0].innerText === 'O' && tds[1].innerText === 'O' && tds[2].innerText === 'O') ||
                (tds[3].innerText === 'O' && tds[4].innerText === 'O' && tds[5].innerText === 'O') ||
                (tds[6].innerText === 'O' && tds[7].innerText === 'O' && tds[8].innerText === 'O') ||
                (tds[0].innerText === 'O' && tds[4].innerText === 'O' && tds[8].innerText === 'O') ||
                (tds[2].innerText === 'O' && tds[4].innerText === 'O' && tds[6].innerText === 'O') ||
                (tds[0].innerText === 'O' && tds[3].innerText === 'O' && tds[6].innerText === 'O') ||
                (tds[1].innerText === 'O' && tds[4].innerText === 'O' && tds[7].innerText === 'O') ||
                (tds[2].innerText === 'O' && tds[5].innerText === 'O' && tds[8].innerText === 'O')
            ) {
                alert("You Lost!!");
            }
        }
    });
});
