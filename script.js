const contractAddress = "0x85de8b152643039da893d4e06e108d51ca3ce80a";
const contractABI = [
	{
		"inputs": [],
		"name": "acceptOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "subscriptionId",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "have",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "want",
				"type": "address"
			}
		],
		"name": "OnlyCoordinatorCanFulfill",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "have",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "coordinator",
				"type": "address"
			}
		],
		"name": "OnlyOwnerOrCoordinator",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ZeroAddress",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "vrfCoordinator",
				"type": "address"
			}
		],
		"name": "CoordinatorSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "playerChoice",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "cpuChoice",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "result",
				"type": "string"
			}
		],
		"name": "GameFinished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "GameRequested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "OwnershipTransferRequested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_playerChoice",
				"type": "uint8"
			}
		],
		"name": "play",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "randomWords",
				"type": "uint256[]"
			}
		],
		"name": "rawFulfillRandomWords",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_vrfCoordinator",
				"type": "address"
			}
		],
		"name": "setCoordinator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "callbackGasLimit",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gameOwner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "keyHash",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MIN_BET",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "numWords",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requestConfirmations",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "s_requests",
		"outputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"internalType": "uint8",
				"name": "playerChoice",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "betAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "s_subscriptionId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "s_vrfCoordinator",
		"outputs": [
			{
				"internalType": "contract IVRFCoordinatorV2Plus",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let signer;
let contract;
let provider;

let wins = 0;
let losses = 0;


// Инициализация при загрузке страницы
async function init() {
    if (!window.ethereum) {
        updateConsole("Ошибка: MetaMask не обнаружен.");
        return;
    }

    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = await provider.getSigner();

        contract = new ethers.Contract(contractAddress, contractABI, signer);

        const addr = await signer.getAddress();
        updateConsole("Система готова. Кошелек подключен.");

        // ❗ ВАЖНО: очищаем старые listeners
        contract.removeAllListeners("GameFinished");


    } catch (err) {
        console.error(err);
        updateConsole("Ошибка: Доступ к кошельку отклонен.");
    }

    await updateUI();
}


// Обновление баланса и счета
async function updateUI() {
    if (signer) {
        const addr = await signer.getAddress();
        const balanceWei = await provider.getBalance(addr);
        const balanceEth = ethers.formatEther(balanceWei);
        document.getElementById("user-balance").innerText = Number(balanceEth).toFixed(4);
        
        document.getElementById("score-wins").innerText = wins;
        document.getElementById("score-losses").innerText = losses;
    }
}



let lastRequestId = null;
let lastBlockNumber = null;

async function playGame(choice) {
    try {
        toggleButtons(true);
        updateConsole("Отправка ставки...");

        const tx = await contract.play(choice, {
            value: ethers.parseEther("0.0001")
        });

        const receipt = await tx.wait();

        // ✅ сохраняем блок
        lastBlockNumber = receipt.blockNumber;

        // достаем requestId
        const event = receipt.logs
            .map(log => {
                try {
                    return contract.interface.parseLog(log);
                } catch {
                    return null;
                }
            })
            .find(e => e && e.name === "GameRequested");

        lastRequestId = event.args.requestId;

        updateConsole("Ставка принята. Ждем VRF...");
        document.getElementById("result").innerText = "Ожидаем оракула...";

        pollResult();

    } catch (err) {
        console.error(err);
        updateConsole("Ошибка при игре.");
        toggleButtons(false);
    }
}


async function pollResult() {
    if (!lastRequestId) return;

    updateConsole("Ожидаем результат от VRF (через Event Listener)...");
    
    // Создаем фильтр для поиска события GameFinished конкретно для нашего игрока
    const filter = contract.filters.GameFinished();

    // Функция-обработчик события
    const handleEvent = (requestId, player, playerChoice, cpuChoice, result, event) => {
        // Проверяем, наш ли это requestId
        if (requestId.toString() === lastRequestId.toString()) {
            
            // Удаляем слушатель, чтобы не висел в памяти
            contract.off(filter, handleEvent);

            const cpu = ["КАМЕНЬ", "БУМАГА", "НОЖНИЦЫ"][Number(cpuChoice)];
            const playerMove = ["КАМЕНЬ", "БУМАГА", "НОЖНИЦЫ"][Number(playerChoice)];

            document.getElementById("result").innerText =
                `ТЫ: ${playerMove} | CPU: ${cpu} | ${result}`;

            updateConsole(`ТЫ: ${playerMove} | CPU: ${cpu} | Итог: ${result}`);

            if (result === "WIN") wins++;
            else if (result === "LOSE") losses++;

            updateUI();
            toggleButtons(false);
        }
    };

    // Включаем прослушивание
    contract.on(filter, handleEvent);

    // ТАЙМАУТ (на случай, если VRF не ответит в течение 2 минут)
    setTimeout(() => {
        contract.off(filter, handleEvent);
        if (document.querySelectorAll('button:disabled').length > 0) {
             updateConsole("Время ожидания истекло. Обновите страницу.");
             toggleButtons(false);
        }
    }, 120000); 
}

async function withdrawFunds() {
    try {
        updateConsole("Запрос вывода баланса...");
        const tx = await contract.withdraw();
        await tx.wait();
        updateConsole("Баланс успешно выведен!");
    } catch (err) {
        updateConsole("Ошибка: Только владелец может выводить средства.");
    }
}



function updateConsole(msg) {
    document.getElementById("status-console").innerText = `> ${msg}`;
}

function toggleButtons(state) {
    document.querySelectorAll('button').forEach(b => b.disabled = state);
}

// Запуск при загрузке
window.addEventListener('load', init);