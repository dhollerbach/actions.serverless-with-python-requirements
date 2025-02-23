import { Route53ExtensionConfiguration } from "./extensionConfiguration";
/**
 * @public
 */
export interface RuntimeExtension {
    configure(extensionConfiguration: Route53ExtensionConfiguration): void;
}
/**
 * @public
 */
export interface RuntimeExtensionsConfig {
    extensions: RuntimeExtension[];
}
/**
 * @internal
 */
export declare const resolveRuntimeExtensions: (runtimeConfig: any, extensions: RuntimeExtension[]) => any;
