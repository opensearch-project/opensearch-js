import BaseRenderer from "./BaseRenderer";
import Namespace from "../components/Namespace";
import MethodRenderer from "./MethodRenderer";

export default class NamespaceRenderer extends BaseRenderer {
    protected templateFile = 'namespace.mustache';
    private namespace: Namespace;

    constructor(namespace: Namespace) {
        super();
        this.namespace = namespace;
    }

    view(): Record<string, any> {
        return {
            jsDoc_namespace: this.namespace.jsDocName,
            namespace_function: this.namespace.functionName,
            method_definitions: this.#method_definitions(),
            root: this.namespace.root,
            functions: this.#functions(),
        }
    }

    outputPath(rootDir: string): string {
        return `${rootDir}/api/api/${this.namespace.filename}.js`;
    }

    #method_definitions(): string {
        return this.namespace.methods.map((method) => {
            return (new MethodRenderer(this.namespace, method)).render();
        }).join('\n\n');
    }

    #functions(): Array<string> {
        return this.namespace.methods.map((method) => method.functionName!);
    }
}