import { Paginator } from "@smithy/types";
import {
  GetModelsCommandInput,
  GetModelsCommandOutput,
} from "../commands/GetModelsCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
export declare const paginateGetModels: (
  config: APIGatewayPaginationConfiguration,
  input: GetModelsCommandInput,
  ...rest: any[]
) => Paginator<GetModelsCommandOutput>;
