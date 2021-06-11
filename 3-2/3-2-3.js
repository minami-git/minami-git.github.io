var array_price = [1280, 1980, 1580, 980, 1680, 1780];

function order(a, b) {
  return b - a;
}

array_price.sort(order);
console.log(array_price);

// いろんな処理

var array_price2 = [12800, 10980, 15820, 9180, 1686660, 11780];

array_price2.sort(order);

//list6 バツ
var produce = [
  { ID: 1, price: 1280 },
  { ID: 2, price: 1980 },
  { ID: 3, price: 1580 },
  { ID: 4, price: 980 },
  { ID: 5, price: 1680 },
  { ID: 6, price: 1780 },
];
products.sort(function (a, b) {
  return a.price - b.price;
});
console.log(products);

//list7
var nodeApp = document.querySelector("#app");

var nodeCheckbox = nodeApp.querySelectorAll('input[type="checknox"]');
nodeCheckbox[0].addEventListener("change", onCheckChanged, false);
nodeCheckbox[1].addEventListener("change", onCheckChanged, false);

var nodeSelect = nodeApp.querySelector(".sorting");
nodeSelect.addEventListener("change", onOrderChanged, false);

var nodeItemOrg = nodeApp.querySelectorAll(".item");

function onCheckChanged(event) {
    var nodeItems = nodeApp.querySelectorAll('item');
    var nodeCount = nodeApp.querySelectorAll('.item');
    var count = nodeItems.length
    for (var i = 0; i < nodeItems.length; i++) {
        showNode(nodeItems[i]);
    }
    if (nodeCheckbox[0].checked) {
        for (var i = 0; i < nodeItems.length; i++) {
            if (!isSaleItem(nodeItems[i])) {
                hideNode(nodeItems[i]);
                count--;
            }
        }
    }
    if (nodeCheckbox[1].checked) {
        for (var i = 0; i < nodeItems.length; i++) {
            if (!isSaleItem(nodeItems[i])) {
                hideNode(nodeItems[i]);
                count--;
            }
        }
    }
    nodeCount.textcontent = count + '件';
}
function onOrderChanged(event) {
    var nodeList = nodeApp.querySelectorAll('.list');
    var nodeCount = nodeApp.querySelectorAll('.item');
    var products = [];
    for (var i = 0; i < nodeItems.length; i++) {
        products.push(nodeItems[i]);
    }
    while (nodeList.firstchild) {
        nodeList.removeChild(nodeList.filstChild);
    }
    if (event.target.value == '1') {
        for (var i = 0; i < nodeItems.length; i++) {
            nodeList.appendChild(nodeItemsOrg[i]);
        }
    }
    else if (event.target.value == '2') {
        products.sort(function (a, b) {
            var prevPrice = parseInt(a.querySelector('.price span'),
                textcontent.replace(',', ''));
            var currentPrice = parseInt(b.querySelector('.price span'),
                textcontent.replace(',', ''));
            return prevPrice - currentPrice;
        });
        for (var i = 0; i < nodeItems.length; i++) {
            nodeList.appendChild(products[i]);
        }
    }
    function isSaleItem(nodeItem) {
        var node = nodeItem.querySelector('.status');
        return (node && node.textContent == 'SALE');
    }
    function isDelvFreeItem(nodeItem) {
        var node = nodeItem.querySelector('.shipping-fee');
        return (node && node.textContent == '送料無料');
    }
    function hideNode(node) {
        node.setAttribute('style', 'display:none;');
    }
    function showNode(node) {
        node.removeAttribute('style');
    }