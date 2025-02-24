import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetServiceLastAccessedDetailsRequest,
  GetServiceLastAccessedDetailsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetServiceLastAccessedDetailsCommandInput
  extends GetServiceLastAccessedDetailsRequest {}
export interface GetServiceLastAccessedDetailsCommandOutput
  extends GetServiceLastAccessedDetailsResponse,
    __MetadataBearer {}
declare const GetServiceLastAccessedDetailsCommand_base: {
  new (
    input: GetServiceLastAccessedDetailsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetServiceLastAccessedDetailsCommandInput,
    GetServiceLastAccessedDetailsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetServiceLastAccessedDetailsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetServiceLastAccessedDetailsCommandInput,
    GetServiceLastAccessedDetailsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetServiceLastAccessedDetailsCommand extends GetServiceLastAccessedDetailsCommand_base {
  protected static __types: {
    api: {
      input: GetServiceLastAccessedDetailsRequest;
      output: GetServiceLastAccessedDetailsResponse;
    };
    sdk: {
      input: GetServiceLastAccessedDetailsCommandInput;
      output: GetServiceLastAccessedDetailsCommandOutput;
    };
  };
}
