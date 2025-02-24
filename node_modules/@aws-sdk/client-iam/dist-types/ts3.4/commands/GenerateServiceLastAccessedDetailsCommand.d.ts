import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GenerateServiceLastAccessedDetailsRequest,
  GenerateServiceLastAccessedDetailsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GenerateServiceLastAccessedDetailsCommandInput
  extends GenerateServiceLastAccessedDetailsRequest {}
export interface GenerateServiceLastAccessedDetailsCommandOutput
  extends GenerateServiceLastAccessedDetailsResponse,
    __MetadataBearer {}
declare const GenerateServiceLastAccessedDetailsCommand_base: {
  new (
    input: GenerateServiceLastAccessedDetailsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GenerateServiceLastAccessedDetailsCommandInput,
    GenerateServiceLastAccessedDetailsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GenerateServiceLastAccessedDetailsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GenerateServiceLastAccessedDetailsCommandInput,
    GenerateServiceLastAccessedDetailsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GenerateServiceLastAccessedDetailsCommand extends GenerateServiceLastAccessedDetailsCommand_base {
  protected static __types: {
    api: {
      input: GenerateServiceLastAccessedDetailsRequest;
      output: GenerateServiceLastAccessedDetailsResponse;
    };
    sdk: {
      input: GenerateServiceLastAccessedDetailsCommandInput;
      output: GenerateServiceLastAccessedDetailsCommandOutput;
    };
  };
}
