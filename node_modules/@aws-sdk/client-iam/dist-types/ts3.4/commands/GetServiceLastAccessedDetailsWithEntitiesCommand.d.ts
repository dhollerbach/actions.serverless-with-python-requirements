import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetServiceLastAccessedDetailsWithEntitiesRequest,
  GetServiceLastAccessedDetailsWithEntitiesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetServiceLastAccessedDetailsWithEntitiesCommandInput
  extends GetServiceLastAccessedDetailsWithEntitiesRequest {}
export interface GetServiceLastAccessedDetailsWithEntitiesCommandOutput
  extends GetServiceLastAccessedDetailsWithEntitiesResponse,
    __MetadataBearer {}
declare const GetServiceLastAccessedDetailsWithEntitiesCommand_base: {
  new (
    input: GetServiceLastAccessedDetailsWithEntitiesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetServiceLastAccessedDetailsWithEntitiesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetServiceLastAccessedDetailsWithEntitiesCommand extends GetServiceLastAccessedDetailsWithEntitiesCommand_base {
  protected static __types: {
    api: {
      input: GetServiceLastAccessedDetailsWithEntitiesRequest;
      output: GetServiceLastAccessedDetailsWithEntitiesResponse;
    };
    sdk: {
      input: GetServiceLastAccessedDetailsWithEntitiesCommandInput;
      output: GetServiceLastAccessedDetailsWithEntitiesCommandOutput;
    };
  };
}
