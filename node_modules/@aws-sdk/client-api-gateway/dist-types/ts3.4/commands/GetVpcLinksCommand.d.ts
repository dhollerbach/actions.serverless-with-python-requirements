import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import { GetVpcLinksRequest, VpcLinks } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetVpcLinksCommandInput extends GetVpcLinksRequest {}
export interface GetVpcLinksCommandOutput extends VpcLinks, __MetadataBearer {}
declare const GetVpcLinksCommand_base: {
  new (
    input: GetVpcLinksCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetVpcLinksCommandInput,
    GetVpcLinksCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetVpcLinksCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetVpcLinksCommandInput,
    GetVpcLinksCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetVpcLinksCommand extends GetVpcLinksCommand_base {
  protected static __types: {
    api: {
      input: GetVpcLinksRequest;
      output: VpcLinks;
    };
    sdk: {
      input: GetVpcLinksCommandInput;
      output: GetVpcLinksCommandOutput;
    };
  };
}
