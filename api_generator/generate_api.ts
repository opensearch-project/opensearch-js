import Generator from "./src/Generator";

const start = async () => {
    const gen = await Generator.init('./OpenSearch.openapi.json');
    gen.generate()
}

start();
