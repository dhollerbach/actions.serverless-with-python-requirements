import { Paginator } from "@smithy/types";
import {
  GetUsagePlanKeysCommandInput,
  GetUsagePlanKeysCommandOutput,
} from "../commands/GetUsagePlanKeysCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
export declare const paginateGetUsagePlanKeys: (
  config: APIGatewayPaginationConfiguration,
  input: GetUsagePlanKeysCommandInput,
  ...rest: any[]
) => Paginator<GetUsagePlanKeysCommandOutput>;
