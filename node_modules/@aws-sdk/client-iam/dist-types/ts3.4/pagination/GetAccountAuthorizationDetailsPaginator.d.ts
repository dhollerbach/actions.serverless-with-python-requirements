import { Paginator } from "@smithy/types";
import {
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
} from "../commands/GetAccountAuthorizationDetailsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateGetAccountAuthorizationDetails: (
  config: IAMPaginationConfiguration,
  input: GetAccountAuthorizationDetailsCommandInput,
  ...rest: any[]
) => Paginator<GetAccountAuthorizationDetailsCommandOutput>;
