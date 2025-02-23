import { createAggregatedClient } from "@smithy/smithy-client";
import { ActivateKeySigningKeyCommand, } from "./commands/ActivateKeySigningKeyCommand";
import { AssociateVPCWithHostedZoneCommand, } from "./commands/AssociateVPCWithHostedZoneCommand";
import { ChangeCidrCollectionCommand, } from "./commands/ChangeCidrCollectionCommand";
import { ChangeResourceRecordSetsCommand, } from "./commands/ChangeResourceRecordSetsCommand";
import { ChangeTagsForResourceCommand, } from "./commands/ChangeTagsForResourceCommand";
import { CreateCidrCollectionCommand, } from "./commands/CreateCidrCollectionCommand";
import { CreateHealthCheckCommand, } from "./commands/CreateHealthCheckCommand";
import { CreateHostedZoneCommand, } from "./commands/CreateHostedZoneCommand";
import { CreateKeySigningKeyCommand, } from "./commands/CreateKeySigningKeyCommand";
import { CreateQueryLoggingConfigCommand, } from "./commands/CreateQueryLoggingConfigCommand";
import { CreateReusableDelegationSetCommand, } from "./commands/CreateReusableDelegationSetCommand";
import { CreateTrafficPolicyCommand, } from "./commands/CreateTrafficPolicyCommand";
import { CreateTrafficPolicyInstanceCommand, } from "./commands/CreateTrafficPolicyInstanceCommand";
import { CreateTrafficPolicyVersionCommand, } from "./commands/CreateTrafficPolicyVersionCommand";
import { CreateVPCAssociationAuthorizationCommand, } from "./commands/CreateVPCAssociationAuthorizationCommand";
import { DeactivateKeySigningKeyCommand, } from "./commands/DeactivateKeySigningKeyCommand";
import { DeleteCidrCollectionCommand, } from "./commands/DeleteCidrCollectionCommand";
import { DeleteHealthCheckCommand, } from "./commands/DeleteHealthCheckCommand";
import { DeleteHostedZoneCommand, } from "./commands/DeleteHostedZoneCommand";
import { DeleteKeySigningKeyCommand, } from "./commands/DeleteKeySigningKeyCommand";
import { DeleteQueryLoggingConfigCommand, } from "./commands/DeleteQueryLoggingConfigCommand";
import { DeleteReusableDelegationSetCommand, } from "./commands/DeleteReusableDelegationSetCommand";
import { DeleteTrafficPolicyCommand, } from "./commands/DeleteTrafficPolicyCommand";
import { DeleteTrafficPolicyInstanceCommand, } from "./commands/DeleteTrafficPolicyInstanceCommand";
import { DeleteVPCAssociationAuthorizationCommand, } from "./commands/DeleteVPCAssociationAuthorizationCommand";
import { DisableHostedZoneDNSSECCommand, } from "./commands/DisableHostedZoneDNSSECCommand";
import { DisassociateVPCFromHostedZoneCommand, } from "./commands/DisassociateVPCFromHostedZoneCommand";
import { EnableHostedZoneDNSSECCommand, } from "./commands/EnableHostedZoneDNSSECCommand";
import { GetAccountLimitCommand, } from "./commands/GetAccountLimitCommand";
import { GetChangeCommand } from "./commands/GetChangeCommand";
import { GetCheckerIpRangesCommand, } from "./commands/GetCheckerIpRangesCommand";
import { GetDNSSECCommand } from "./commands/GetDNSSECCommand";
import { GetGeoLocationCommand, } from "./commands/GetGeoLocationCommand";
import { GetHealthCheckCommand, } from "./commands/GetHealthCheckCommand";
import { GetHealthCheckCountCommand, } from "./commands/GetHealthCheckCountCommand";
import { GetHealthCheckLastFailureReasonCommand, } from "./commands/GetHealthCheckLastFailureReasonCommand";
import { GetHealthCheckStatusCommand, } from "./commands/GetHealthCheckStatusCommand";
import { GetHostedZoneCommand, } from "./commands/GetHostedZoneCommand";
import { GetHostedZoneCountCommand, } from "./commands/GetHostedZoneCountCommand";
import { GetHostedZoneLimitCommand, } from "./commands/GetHostedZoneLimitCommand";
import { GetQueryLoggingConfigCommand, } from "./commands/GetQueryLoggingConfigCommand";
import { GetReusableDelegationSetCommand, } from "./commands/GetReusableDelegationSetCommand";
import { GetReusableDelegationSetLimitCommand, } from "./commands/GetReusableDelegationSetLimitCommand";
import { GetTrafficPolicyCommand, } from "./commands/GetTrafficPolicyCommand";
import { GetTrafficPolicyInstanceCommand, } from "./commands/GetTrafficPolicyInstanceCommand";
import { GetTrafficPolicyInstanceCountCommand, } from "./commands/GetTrafficPolicyInstanceCountCommand";
import { ListCidrBlocksCommand, } from "./commands/ListCidrBlocksCommand";
import { ListCidrCollectionsCommand, } from "./commands/ListCidrCollectionsCommand";
import { ListCidrLocationsCommand, } from "./commands/ListCidrLocationsCommand";
import { ListGeoLocationsCommand, } from "./commands/ListGeoLocationsCommand";
import { ListHealthChecksCommand, } from "./commands/ListHealthChecksCommand";
import { ListHostedZonesByNameCommand, } from "./commands/ListHostedZonesByNameCommand";
import { ListHostedZonesByVPCCommand, } from "./commands/ListHostedZonesByVPCCommand";
import { ListHostedZonesCommand, } from "./commands/ListHostedZonesCommand";
import { ListQueryLoggingConfigsCommand, } from "./commands/ListQueryLoggingConfigsCommand";
import { ListResourceRecordSetsCommand, } from "./commands/ListResourceRecordSetsCommand";
import { ListReusableDelegationSetsCommand, } from "./commands/ListReusableDelegationSetsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListTagsForResourcesCommand, } from "./commands/ListTagsForResourcesCommand";
import { ListTrafficPoliciesCommand, } from "./commands/ListTrafficPoliciesCommand";
import { ListTrafficPolicyInstancesByHostedZoneCommand, } from "./commands/ListTrafficPolicyInstancesByHostedZoneCommand";
import { ListTrafficPolicyInstancesByPolicyCommand, } from "./commands/ListTrafficPolicyInstancesByPolicyCommand";
import { ListTrafficPolicyInstancesCommand, } from "./commands/ListTrafficPolicyInstancesCommand";
import { ListTrafficPolicyVersionsCommand, } from "./commands/ListTrafficPolicyVersionsCommand";
import { ListVPCAssociationAuthorizationsCommand, } from "./commands/ListVPCAssociationAuthorizationsCommand";
import { TestDNSAnswerCommand, } from "./commands/TestDNSAnswerCommand";
import { UpdateHealthCheckCommand, } from "./commands/UpdateHealthCheckCommand";
import { UpdateHostedZoneCommentCommand, } from "./commands/UpdateHostedZoneCommentCommand";
import { UpdateTrafficPolicyCommentCommand, } from "./commands/UpdateTrafficPolicyCommentCommand";
import { UpdateTrafficPolicyInstanceCommand, } from "./commands/UpdateTrafficPolicyInstanceCommand";
import { Route53Client } from "./Route53Client";
const commands = {
    ActivateKeySigningKeyCommand,
    AssociateVPCWithHostedZoneCommand,
    ChangeCidrCollectionCommand,
    ChangeResourceRecordSetsCommand,
    ChangeTagsForResourceCommand,
    CreateCidrCollectionCommand,
    CreateHealthCheckCommand,
    CreateHostedZoneCommand,
    CreateKeySigningKeyCommand,
    CreateQueryLoggingConfigCommand,
    CreateReusableDelegationSetCommand,
    CreateTrafficPolicyCommand,
    CreateTrafficPolicyInstanceCommand,
    CreateTrafficPolicyVersionCommand,
    CreateVPCAssociationAuthorizationCommand,
    DeactivateKeySigningKeyCommand,
    DeleteCidrCollectionCommand,
    DeleteHealthCheckCommand,
    DeleteHostedZoneCommand,
    DeleteKeySigningKeyCommand,
    DeleteQueryLoggingConfigCommand,
    DeleteReusableDelegationSetCommand,
    DeleteTrafficPolicyCommand,
    DeleteTrafficPolicyInstanceCommand,
    DeleteVPCAssociationAuthorizationCommand,
    DisableHostedZoneDNSSECCommand,
    DisassociateVPCFromHostedZoneCommand,
    EnableHostedZoneDNSSECCommand,
    GetAccountLimitCommand,
    GetChangeCommand,
    GetCheckerIpRangesCommand,
    GetDNSSECCommand,
    GetGeoLocationCommand,
    GetHealthCheckCommand,
    GetHealthCheckCountCommand,
    GetHealthCheckLastFailureReasonCommand,
    GetHealthCheckStatusCommand,
    GetHostedZoneCommand,
    GetHostedZoneCountCommand,
    GetHostedZoneLimitCommand,
    GetQueryLoggingConfigCommand,
    GetReusableDelegationSetCommand,
    GetReusableDelegationSetLimitCommand,
    GetTrafficPolicyCommand,
    GetTrafficPolicyInstanceCommand,
    GetTrafficPolicyInstanceCountCommand,
    ListCidrBlocksCommand,
    ListCidrCollectionsCommand,
    ListCidrLocationsCommand,
    ListGeoLocationsCommand,
    ListHealthChecksCommand,
    ListHostedZonesCommand,
    ListHostedZonesByNameCommand,
    ListHostedZonesByVPCCommand,
    ListQueryLoggingConfigsCommand,
    ListResourceRecordSetsCommand,
    ListReusableDelegationSetsCommand,
    ListTagsForResourceCommand,
    ListTagsForResourcesCommand,
    ListTrafficPoliciesCommand,
    ListTrafficPolicyInstancesCommand,
    ListTrafficPolicyInstancesByHostedZoneCommand,
    ListTrafficPolicyInstancesByPolicyCommand,
    ListTrafficPolicyVersionsCommand,
    ListVPCAssociationAuthorizationsCommand,
    TestDNSAnswerCommand,
    UpdateHealthCheckCommand,
    UpdateHostedZoneCommentCommand,
    UpdateTrafficPolicyCommentCommand,
    UpdateTrafficPolicyInstanceCommand,
};
export class Route53 extends Route53Client {
}
createAggregatedClient(commands, Route53);
