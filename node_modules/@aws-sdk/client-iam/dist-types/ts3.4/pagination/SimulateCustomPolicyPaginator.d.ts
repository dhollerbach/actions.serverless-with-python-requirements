import { Paginator } from "@smithy/types";
import {
  SimulateCustomPolicyCommandInput,
  SimulateCustomPolicyCommandOutput,
} from "../commands/SimulateCustomPolicyCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateSimulateCustomPolicy: (
  config: IAMPaginationConfiguration,
  input: SimulateCustomPolicyCommandInput,
  ...rest: any[]
) => Paginator<SimulateCustomPolicyCommandOutput>;
