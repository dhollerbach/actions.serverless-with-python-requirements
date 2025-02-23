import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetServerCertificateRequest,
  GetServerCertificateResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetServerCertificateCommandInput
  extends GetServerCertificateRequest {}
export interface GetServerCertificateCommandOutput
  extends GetServerCertificateResponse,
    __MetadataBearer {}
declare const GetServerCertificateCommand_base: {
  new (
    input: GetServerCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetServerCertificateCommandInput,
    GetServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetServerCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetServerCertificateCommandInput,
    GetServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetServerCertificateCommand extends GetServerCertificateCommand_base {
  protected static __types: {
    api: {
      input: GetServerCertificateRequest;
      output: GetServerCertificateResponse;
    };
    sdk: {
      input: GetServerCertificateCommandInput;
      output: GetServerCertificateCommandOutput;
    };
  };
}
