type CarBody = {
    material: string;
    state: string;
};

type Tires = {
    airPressure: number;
    condition: string;
};

type Engine = {
    horsepower: number;
    oilDensity: number;
};

type Diagnostics = {
    partName: string;
    runDiagnostics: () => string;
};

function carDiagnostics(
    carBody: CarBody & Diagnostics,
    tires: Tires & Diagnostics,
    engine: Engine & Diagnostics
) {}
