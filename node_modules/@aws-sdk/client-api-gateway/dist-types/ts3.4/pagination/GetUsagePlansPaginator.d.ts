import { Paginator } from "@smithy/types";
import {
  GetUsagePlansCommandInput,
  GetUsagePlansCommandOutput,
} from "../commands/GetUsagePlansCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
export declare const paginateGetUsagePlans: (
  config: APIGatewayPaginationConfiguration,
  input: GetUsagePlansCommandInput,
  ...rest: any[]
) => Paginator<GetUsagePlansCommandOutput>;
