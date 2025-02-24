import { Paginator } from "@smithy/types";
import {
  SimulatePrincipalPolicyCommandInput,
  SimulatePrincipalPolicyCommandOutput,
} from "../commands/SimulatePrincipalPolicyCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateSimulatePrincipalPolicy: (
  config: IAMPaginationConfiguration,
  input: SimulatePrincipalPolicyCommandInput,
  ...rest: any[]
) => Paginator<SimulatePrincipalPolicyCommandOutput>;
