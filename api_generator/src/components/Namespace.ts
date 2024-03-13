import Method from "./Method";
import {snake2Camel, snake2Capitalized, snake2Hyphen} from "../renderers/stringHelpers";

export default class Namespace {
    name: string;
    functionName: string | undefined;
    prototypeName: string | undefined;
    jsDocName: string;
    title: string;
    methods: Array<Method>;
    root: boolean;
    filename: string;
    symbolName: string | undefined;
    symbolDesc: string | undefined;

    constructor(name: string, methods: Array<Method>) {
        this.name = name;
        this.methods = methods.sort((a, b) => a.name.localeCompare(b.name));
        this.root = Object.values(methods)[0].root;
        this.functionName = this.root ? undefined : `${snake2Camel(name)}Api`;
        this.prototypeName = this.root ? undefined : snake2Camel(name, false);
        this.jsDocName = `API-${snake2Hyphen(name)}`;
        this.filename = this.root ? `_${name}` : name;
        this.symbolName = this.root ? undefined : `k${snake2Camel(name)}`;
        this.symbolDesc = this.root ? undefined : snake2Camel(name);
        this.title = snake2Capitalized(name);
    }
}