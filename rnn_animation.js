let rnnNodes = [];
let rnnEdges = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    let numInputNodes = 3;
    let numHiddenNodes = 4;
    let numOutputNodes = 2;

    let nodeSize = 30;
    let verticalSpacing = 60;
    let horizontalSpacing = 100;

    for (let i = 0; i < numInputNodes; i++) {
        rnnNodes.push(new Node(width / 4, (i + 1) * verticalSpacing, nodeSize, 'Input'));
    }

    for (let i = 0; i < numHiddenNodes; i++) {
        rnnNodes.push(new Node(width / 2, (i + 1) * verticalSpacing - (numHiddenNodes - numInputNodes) * verticalSpacing / 2, nodeSize, 'Hidden'));
    }

    for (let i = 0; i < numOutputNodes; i++) {
        rnnNodes.push(new Node(3 * width / 4, (i + 1) * verticalSpacing + (numInputNodes - numOutputNodes) * verticalSpacing / 2, nodeSize, 'Output'));
    }

    for (let i = 0; i < numInputNodes; i++) {
        for (let j = numInputNodes; j < numInputNodes + numHiddenNodes; j++) {
            rnnEdges.push(new Edge(rnnNodes[i], rnnNodes[j]));
        }
    }

    for (let i = numInputNodes; i < numInputNodes + numHiddenNodes; i++) {
        for (let j = numInputNodes + numHiddenNodes; j < rnnNodes.length; j++) {
            rnnEdges.push(new Edge(rnnNodes[i], rnnNodes[j]));
        }
    }
}

function draw() {
    background(240);

    for (let node of rnnNodes) {
        node.show();
    }

    for (let edge of rnnEdges) {
        edge.show();
    }
}

class Node {
    constructor(x, y, size, type) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.type = type;
    }

    show() {
        fill(255);
        stroke(0);
        ellipse(this.x, this.y, this.size);

        textSize(14);
        textAlign(CENTER, CENTER);
        fill(0);
        text(this.type, this.x, this.y + this.size / 2 + 20);
    }
}

class Edge {
    constructor(startNode, endNode) {
        this.startNode = startNode;
        this.endNode = endNode;
    }

    show() {
        stroke(0);
        line(this.startNode.x, this.startNode.y, this.endNode.x, this.endNode.y);
    }
}
