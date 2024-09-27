# Import necessary libraries
from qiskit import QuantumCircuit, Aer, execute

# Create a quantum circuit with one qubit
qc = QuantumCircuit(1)

# Apply a Hadamard gate to put the qubit in superposition
qc.h(0)

# Measure the qubit
qc.measure_all()

# Use the Aer simulator to execute the circuit
simulator = Aer.get_backend('qasm_simulator')
result = execute(qc, backend=simulator, shots=1000).result()

# Get the counts of measurement results
counts = result.get_counts(qc)

# Print the results
print("Measurement results:", counts)
