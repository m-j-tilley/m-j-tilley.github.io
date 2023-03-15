let neurons = [];
let connections = [];
let numNeurons = 10;
let timeStep = 0;

function setup() {
  createCanvas(800, 400);
  let neuronRadius = 30;
  let neuronSpacing = (width - numNeurons * neuronRadius * 2) / (numNeurons + 1);

  for (let i = 0; i < numNeurons; i++) {
    let x = neuronSpacing * (i + 1) + neuronRadius * 2 * i;
    let y = height / 2;
    neurons.push(new Neuron(x, y, neuronRadius));
  }

  for (let i = 0; i < neurons.length - 1; i++) {
    let n1 = neurons[i];
    let n2 = neurons[i + 1];
    connections.push(new Connection(n1, n2));
  }
}

function draw() {
  background(255);
  for (let neuron of neurons) {
    neuron.update();
    neuron.display();
  }
  for (let connection of connections) {
    connection.display();
  }
  timeStep += 0.1;
}

class Neuron {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  update() {
    this.y = height / 2 + 50 * sin(timeStep + this.x / 100);
  }

  display() {
    fill(50, 100, 200);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}

class Connection {
  constructor(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
  }

  display() {
    stroke(0, 100, 200);
    strokeWeight(2);
    line(this.n1.x, this.n1.y, this.n2.x, this.n2.y);
  }
}
