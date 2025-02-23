import { Paginator } from "@smithy/types";
import {
  GetUsageCommandInput,
  GetUsageCommandOutput,
} from "../commands/GetUsageCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
export declare const paginateGetUsage: (
  config: APIGatewayPaginationConfiguration,
  input: GetUsageCommandInput,
  ...rest: any[]
) => Paginator<GetUsageCommandOutput>;
