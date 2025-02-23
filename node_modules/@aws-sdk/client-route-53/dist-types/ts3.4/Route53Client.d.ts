import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
} from "@aws-sdk/middleware-host-header";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import {
  RegionInputConfig,
  RegionResolvedConfig,
} from "@smithy/config-resolver";
import {
  EndpointInputConfig,
  EndpointResolvedConfig,
} from "@smithy/middleware-endpoint";
import {
  RetryInputConfig,
  RetryResolvedConfig,
} from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";
import {
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  ActivateKeySigningKeyCommandInput,
  ActivateKeySigningKeyCommandOutput,
} from "./commands/ActivateKeySigningKeyCommand";
import {
  AssociateVPCWithHostedZoneCommandInput,
  AssociateVPCWithHostedZoneCommandOutput,
} from "./commands/AssociateVPCWithHostedZoneCommand";
import {
  ChangeCidrCollectionCommandInput,
  ChangeCidrCollectionCommandOutput,
} from "./commands/ChangeCidrCollectionCommand";
import {
  ChangeResourceRecordSetsCommandInput,
  ChangeResourceRecordSetsCommandOutput,
} from "./commands/ChangeResourceRecordSetsCommand";
import {
  ChangeTagsForResourceCommandInput,
  ChangeTagsForResourceCommandOutput,
} from "./commands/ChangeTagsForResourceCommand";
import {
  CreateCidrCollectionCommandInput,
  CreateCidrCollectionCommandOutput,
} from "./commands/CreateCidrCollectionCommand";
import {
  CreateHealthCheckCommandInput,
  CreateHealthCheckCommandOutput,
} from "./commands/CreateHealthCheckCommand";
import {
  CreateHostedZoneCommandInput,
  CreateHostedZoneCommandOutput,
} from "./commands/CreateHostedZoneCommand";
import {
  CreateKeySigningKeyCommandInput,
  CreateKeySigningKeyCommandOutput,
} from "./commands/CreateKeySigningKeyCommand";
import {
  CreateQueryLoggingConfigCommandInput,
  CreateQueryLoggingConfigCommandOutput,
} from "./commands/CreateQueryLoggingConfigCommand";
import {
  CreateReusableDelegationSetCommandInput,
  CreateReusableDelegationSetCommandOutput,
} from "./commands/CreateReusableDelegationSetCommand";
import {
  CreateTrafficPolicyCommandInput,
  CreateTrafficPolicyCommandOutput,
} from "./commands/CreateTrafficPolicyCommand";
import {
  CreateTrafficPolicyInstanceCommandInput,
  CreateTrafficPolicyInstanceCommandOutput,
} from "./commands/CreateTrafficPolicyInstanceCommand";
import {
  CreateTrafficPolicyVersionCommandInput,
  CreateTrafficPolicyVersionCommandOutput,
} from "./commands/CreateTrafficPolicyVersionCommand";
import {
  CreateVPCAssociationAuthorizationCommandInput,
  CreateVPCAssociationAuthorizationCommandOutput,
} from "./commands/CreateVPCAssociationAuthorizationCommand";
import {
  DeactivateKeySigningKeyCommandInput,
  DeactivateKeySigningKeyCommandOutput,
} from "./commands/DeactivateKeySigningKeyCommand";
import {
  DeleteCidrCollectionCommandInput,
  DeleteCidrCollectionCommandOutput,
} from "./commands/DeleteCidrCollectionCommand";
import {
  DeleteHealthCheckCommandInput,
  DeleteHealthCheckCommandOutput,
} from "./commands/DeleteHealthCheckCommand";
import {
  DeleteHostedZoneCommandInput,
  DeleteHostedZoneCommandOutput,
} from "./commands/DeleteHostedZoneCommand";
import {
  DeleteKeySigningKeyCommandInput,
  DeleteKeySigningKeyCommandOutput,
} from "./commands/DeleteKeySigningKeyCommand";
import {
  DeleteQueryLoggingConfigCommandInput,
  DeleteQueryLoggingConfigCommandOutput,
} from "./commands/DeleteQueryLoggingConfigCommand";
import {
  DeleteReusableDelegationSetCommandInput,
  DeleteReusableDelegationSetCommandOutput,
} from "./commands/DeleteReusableDelegationSetCommand";
import {
  DeleteTrafficPolicyCommandInput,
  DeleteTrafficPolicyCommandOutput,
} from "./commands/DeleteTrafficPolicyCommand";
import {
  DeleteTrafficPolicyInstanceCommandInput,
  DeleteTrafficPolicyInstanceCommandOutput,
} from "./commands/DeleteTrafficPolicyInstanceCommand";
import {
  DeleteVPCAssociationAuthorizationCommandInput,
  DeleteVPCAssociationAuthorizationCommandOutput,
} from "./commands/DeleteVPCAssociationAuthorizationCommand";
import {
  DisableHostedZoneDNSSECCommandInput,
  DisableHostedZoneDNSSECCommandOutput,
} from "./commands/DisableHostedZoneDNSSECCommand";
import {
  DisassociateVPCFromHostedZoneCommandInput,
  DisassociateVPCFromHostedZoneCommandOutput,
} from "./commands/DisassociateVPCFromHostedZoneCommand";
import {
  EnableHostedZoneDNSSECCommandInput,
  EnableHostedZoneDNSSECCommandOutput,
} from "./commands/EnableHostedZoneDNSSECCommand";
import {
  GetAccountLimitCommandInput,
  GetAccountLimitCommandOutput,
} from "./commands/GetAccountLimitCommand";
import {
  GetChangeCommandInput,
  GetChangeCommandOutput,
} from "./commands/GetChangeCommand";
import {
  GetCheckerIpRangesCommandInput,
  GetCheckerIpRangesCommandOutput,
} from "./commands/GetCheckerIpRangesCommand";
import {
  GetDNSSECCommandInput,
  GetDNSSECCommandOutput,
} from "./commands/GetDNSSECCommand";
import {
  GetGeoLocationCommandInput,
  GetGeoLocationCommandOutput,
} from "./commands/GetGeoLocationCommand";
import {
  GetHealthCheckCommandInput,
  GetHealthCheckCommandOutput,
} from "./commands/GetHealthCheckCommand";
import {
  GetHealthCheckCountCommandInput,
  GetHealthCheckCountCommandOutput,
} from "./commands/GetHealthCheckCountCommand";
import {
  GetHealthCheckLastFailureReasonCommandInput,
  GetHealthCheckLastFailureReasonCommandOutput,
} from "./commands/GetHealthCheckLastFailureReasonCommand";
import {
  GetHealthCheckStatusCommandInput,
  GetHealthCheckStatusCommandOutput,
} from "./commands/GetHealthCheckStatusCommand";
import {
  GetHostedZoneCommandInput,
  GetHostedZoneCommandOutput,
} from "./commands/GetHostedZoneCommand";
import {
  GetHostedZoneCountCommandInput,
  GetHostedZoneCountCommandOutput,
} from "./commands/GetHostedZoneCountCommand";
import {
  GetHostedZoneLimitCommandInput,
  GetHostedZoneLimitCommandOutput,
} from "./commands/GetHostedZoneLimitCommand";
import {
  GetQueryLoggingConfigCommandInput,
  GetQueryLoggingConfigCommandOutput,
} from "./commands/GetQueryLoggingConfigCommand";
import {
  GetReusableDelegationSetCommandInput,
  GetReusableDelegationSetCommandOutput,
} from "./commands/GetReusableDelegationSetCommand";
import {
  GetReusableDelegationSetLimitCommandInput,
  GetReusableDelegationSetLimitCommandOutput,
} from "./commands/GetReusableDelegationSetLimitCommand";
import {
  GetTrafficPolicyCommandInput,
  GetTrafficPolicyCommandOutput,
} from "./commands/GetTrafficPolicyCommand";
import {
  GetTrafficPolicyInstanceCommandInput,
  GetTrafficPolicyInstanceCommandOutput,
} from "./commands/GetTrafficPolicyInstanceCommand";
import {
  GetTrafficPolicyInstanceCountCommandInput,
  GetTrafficPolicyInstanceCountCommandOutput,
} from "./commands/GetTrafficPolicyInstanceCountCommand";
import {
  ListCidrBlocksCommandInput,
  ListCidrBlocksCommandOutput,
} from "./commands/ListCidrBlocksCommand";
import {
  ListCidrCollectionsCommandInput,
  ListCidrCollectionsCommandOutput,
} from "./commands/ListCidrCollectionsCommand";
import {
  ListCidrLocationsCommandInput,
  ListCidrLocationsCommandOutput,
} from "./commands/ListCidrLocationsCommand";
import {
  ListGeoLocationsCommandInput,
  ListGeoLocationsCommandOutput,
} from "./commands/ListGeoLocationsCommand";
import {
  ListHealthChecksCommandInput,
  ListHealthChecksCommandOutput,
} from "./commands/ListHealthChecksCommand";
import {
  ListHostedZonesByNameCommandInput,
  ListHostedZonesByNameCommandOutput,
} from "./commands/ListHostedZonesByNameCommand";
import {
  ListHostedZonesByVPCCommandInput,
  ListHostedZonesByVPCCommandOutput,
} from "./commands/ListHostedZonesByVPCCommand";
import {
  ListHostedZonesCommandInput,
  ListHostedZonesCommandOutput,
} from "./commands/ListHostedZonesCommand";
import {
  ListQueryLoggingConfigsCommandInput,
  ListQueryLoggingConfigsCommandOutput,
} from "./commands/ListQueryLoggingConfigsCommand";
import {
  ListResourceRecordSetsCommandInput,
  ListResourceRecordSetsCommandOutput,
} from "./commands/ListResourceRecordSetsCommand";
import {
  ListReusableDelegationSetsCommandInput,
  ListReusableDelegationSetsCommandOutput,
} from "./commands/ListReusableDelegationSetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTagsForResourcesCommandInput,
  ListTagsForResourcesCommandOutput,
} from "./commands/ListTagsForResourcesCommand";
import {
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput,
} from "./commands/ListTrafficPoliciesCommand";
import {
  ListTrafficPolicyInstancesByHostedZoneCommandInput,
  ListTrafficPolicyInstancesByHostedZoneCommandOutput,
} from "./commands/ListTrafficPolicyInstancesByHostedZoneCommand";
import {
  ListTrafficPolicyInstancesByPolicyCommandInput,
  ListTrafficPolicyInstancesByPolicyCommandOutput,
} from "./commands/ListTrafficPolicyInstancesByPolicyCommand";
import {
  ListTrafficPolicyInstancesCommandInput,
  ListTrafficPolicyInstancesCommandOutput,
} from "./commands/ListTrafficPolicyInstancesCommand";
import {
  ListTrafficPolicyVersionsCommandInput,
  ListTrafficPolicyVersionsCommandOutput,
} from "./commands/ListTrafficPolicyVersionsCommand";
import {
  ListVPCAssociationAuthorizationsCommandInput,
  ListVPCAssociationAuthorizationsCommandOutput,
} from "./commands/ListVPCAssociationAuthorizationsCommand";
import {
  TestDNSAnswerCommandInput,
  TestDNSAnswerCommandOutput,
} from "./commands/TestDNSAnswerCommand";
import {
  UpdateHealthCheckCommandInput,
  UpdateHealthCheckCommandOutput,
} from "./commands/UpdateHealthCheckCommand";
import {
  UpdateHostedZoneCommentCommandInput,
  UpdateHostedZoneCommentCommandOutput,
} from "./commands/UpdateHostedZoneCommentCommand";
import {
  UpdateTrafficPolicyCommentCommandInput,
  UpdateTrafficPolicyCommentCommandOutput,
} from "./commands/UpdateTrafficPolicyCommentCommand";
import {
  UpdateTrafficPolicyInstanceCommandInput,
  UpdateTrafficPolicyInstanceCommandOutput,
} from "./commands/UpdateTrafficPolicyInstanceCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
} from "./endpoint/EndpointParameters";
import { RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";
export { __Client };
export type ServiceInputTypes =
  | ActivateKeySigningKeyCommandInput
  | AssociateVPCWithHostedZoneCommandInput
  | ChangeCidrCollectionCommandInput
  | ChangeResourceRecordSetsCommandInput
  | ChangeTagsForResourceCommandInput
  | CreateCidrCollectionCommandInput
  | CreateHealthCheckCommandInput
  | CreateHostedZoneCommandInput
  | CreateKeySigningKeyCommandInput
  | CreateQueryLoggingConfigCommandInput
  | CreateReusableDelegationSetCommandInput
  | CreateTrafficPolicyCommandInput
  | CreateTrafficPolicyInstanceCommandInput
  | CreateTrafficPolicyVersionCommandInput
  | CreateVPCAssociationAuthorizationCommandInput
  | DeactivateKeySigningKeyCommandInput
  | DeleteCidrCollectionCommandInput
  | DeleteHealthCheckCommandInput
  | DeleteHostedZoneCommandInput
  | DeleteKeySigningKeyCommandInput
  | DeleteQueryLoggingConfigCommandInput
  | DeleteReusableDelegationSetCommandInput
  | DeleteTrafficPolicyCommandInput
  | DeleteTrafficPolicyInstanceCommandInput
  | DeleteVPCAssociationAuthorizationCommandInput
  | DisableHostedZoneDNSSECCommandInput
  | DisassociateVPCFromHostedZoneCommandInput
  | EnableHostedZoneDNSSECCommandInput
  | GetAccountLimitCommandInput
  | GetChangeCommandInput
  | GetCheckerIpRangesCommandInput
  | GetDNSSECCommandInput
  | GetGeoLocationCommandInput
  | GetHealthCheckCommandInput
  | GetHealthCheckCountCommandInput
  | GetHealthCheckLastFailureReasonCommandInput
  | GetHealthCheckStatusCommandInput
  | GetHostedZoneCommandInput
  | GetHostedZoneCountCommandInput
  | GetHostedZoneLimitCommandInput
  | GetQueryLoggingConfigCommandInput
  | GetReusableDelegationSetCommandInput
  | GetReusableDelegationSetLimitCommandInput
  | GetTrafficPolicyCommandInput
  | GetTrafficPolicyInstanceCommandInput
  | GetTrafficPolicyInstanceCountCommandInput
  | ListCidrBlocksCommandInput
  | ListCidrCollectionsCommandInput
  | ListCidrLocationsCommandInput
  | ListGeoLocationsCommandInput
  | ListHealthChecksCommandInput
  | ListHostedZonesByNameCommandInput
  | ListHostedZonesByVPCCommandInput
  | ListHostedZonesCommandInput
  | ListQueryLoggingConfigsCommandInput
  | ListResourceRecordSetsCommandInput
  | ListReusableDelegationSetsCommandInput
  | ListTagsForResourceCommandInput
  | ListTagsForResourcesCommandInput
  | ListTrafficPoliciesCommandInput
  | ListTrafficPolicyInstancesByHostedZoneCommandInput
  | ListTrafficPolicyInstancesByPolicyCommandInput
  | ListTrafficPolicyInstancesCommandInput
  | ListTrafficPolicyVersionsCommandInput
  | ListVPCAssociationAuthorizationsCommandInput
  | TestDNSAnswerCommandInput
  | UpdateHealthCheckCommandInput
  | UpdateHostedZoneCommentCommandInput
  | UpdateTrafficPolicyCommentCommandInput
  | UpdateTrafficPolicyInstanceCommandInput;
export type ServiceOutputTypes =
  | ActivateKeySigningKeyCommandOutput
  | AssociateVPCWithHostedZoneCommandOutput
  | ChangeCidrCollectionCommandOutput
  | ChangeResourceRecordSetsCommandOutput
  | ChangeTagsForResourceCommandOutput
  | CreateCidrCollectionCommandOutput
  | CreateHealthCheckCommandOutput
  | CreateHostedZoneCommandOutput
  | CreateKeySigningKeyCommandOutput
  | CreateQueryLoggingConfigCommandOutput
  | CreateReusableDelegationSetCommandOutput
  | CreateTrafficPolicyCommandOutput
  | CreateTrafficPolicyInstanceCommandOutput
  | CreateTrafficPolicyVersionCommandOutput
  | CreateVPCAssociationAuthorizationCommandOutput
  | DeactivateKeySigningKeyCommandOutput
  | DeleteCidrCollectionCommandOutput
  | DeleteHealthCheckCommandOutput
  | DeleteHostedZoneCommandOutput
  | DeleteKeySigningKeyCommandOutput
  | DeleteQueryLoggingConfigCommandOutput
  | DeleteReusableDelegationSetCommandOutput
  | DeleteTrafficPolicyCommandOutput
  | DeleteTrafficPolicyInstanceCommandOutput
  | DeleteVPCAssociationAuthorizationCommandOutput
  | DisableHostedZoneDNSSECCommandOutput
  | DisassociateVPCFromHostedZoneCommandOutput
  | EnableHostedZoneDNSSECCommandOutput
  | GetAccountLimitCommandOutput
  | GetChangeCommandOutput
  | GetCheckerIpRangesCommandOutput
  | GetDNSSECCommandOutput
  | GetGeoLocationCommandOutput
  | GetHealthCheckCommandOutput
  | GetHealthCheckCountCommandOutput
  | GetHealthCheckLastFailureReasonCommandOutput
  | GetHealthCheckStatusCommandOutput
  | GetHostedZoneCommandOutput
  | GetHostedZoneCountCommandOutput
  | GetHostedZoneLimitCommandOutput
  | GetQueryLoggingConfigCommandOutput
  | GetReusableDelegationSetCommandOutput
  | GetReusableDelegationSetLimitCommandOutput
  | GetTrafficPolicyCommandOutput
  | GetTrafficPolicyInstanceCommandOutput
  | GetTrafficPolicyInstanceCountCommandOutput
  | ListCidrBlocksCommandOutput
  | ListCidrCollectionsCommandOutput
  | ListCidrLocationsCommandOutput
  | ListGeoLocationsCommandOutput
  | ListHealthChecksCommandOutput
  | ListHostedZonesByNameCommandOutput
  | ListHostedZonesByVPCCommandOutput
  | ListHostedZonesCommandOutput
  | ListQueryLoggingConfigsCommandOutput
  | ListResourceRecordSetsCommandOutput
  | ListReusableDelegationSetsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTagsForResourcesCommandOutput
  | ListTrafficPoliciesCommandOutput
  | ListTrafficPolicyInstancesByHostedZoneCommandOutput
  | ListTrafficPolicyInstancesByPolicyCommandOutput
  | ListTrafficPolicyInstancesCommandOutput
  | ListTrafficPolicyVersionsCommandOutput
  | ListVPCAssociationAuthorizationsCommandOutput
  | TestDNSAnswerCommandOutput
  | UpdateHealthCheckCommandOutput
  | UpdateHostedZoneCommentCommandOutput
  | UpdateTrafficPolicyCommentCommandOutput
  | UpdateTrafficPolicyInstanceCommandOutput;
export interface ClientDefaults
  extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  requestHandler?: __HttpHandlerUserInput;
  sha256?: __ChecksumConstructor | __HashConstructor;
  urlParser?: __UrlParser;
  bodyLengthChecker?: __BodyLengthCalculator;
  streamCollector?: __StreamCollector;
  base64Decoder?: __Decoder;
  base64Encoder?: __Encoder;
  utf8Decoder?: __Decoder;
  utf8Encoder?: __Encoder;
  runtime?: string;
  disableHostPrefix?: boolean;
  serviceId?: string;
  useDualstackEndpoint?: boolean | __Provider<boolean>;
  useFipsEndpoint?: boolean | __Provider<boolean>;
  region?: string | __Provider<string>;
  profile?: string;
  defaultUserAgentProvider?: Provider<__UserAgent>;
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;
  maxAttempts?: number | __Provider<number>;
  retryMode?: string | __Provider<string>;
  logger?: __Logger;
  extensions?: RuntimeExtension[];
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}
export type Route53ClientConfigType = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
export interface Route53ClientConfig extends Route53ClientConfigType {}
export type Route53ClientResolvedConfigType =
  __SmithyResolvedConfiguration<__HttpHandlerOptions> &
    Required<ClientDefaults> &
    RuntimeExtensionsConfig &
    UserAgentResolvedConfig &
    RetryResolvedConfig &
    RegionResolvedConfig &
    HostHeaderResolvedConfig &
    EndpointResolvedConfig<EndpointParameters> &
    HttpAuthSchemeResolvedConfig &
    ClientResolvedEndpointParameters;
export interface Route53ClientResolvedConfig
  extends Route53ClientResolvedConfigType {}
export declare class Route53Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Route53ClientResolvedConfig
> {
  readonly config: Route53ClientResolvedConfig;
  constructor(
    ...[configuration]: __CheckOptionalClientConfig<Route53ClientConfig>
  );
  destroy(): void;
}
