import { loadRestXmlErrorCode, parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { XmlNode as __XmlNode } from "@aws-sdk/xml-builder";
import { requestBuilder as rb } from "@smithy/core";
import { collectBody, decorateServiceException as __decorateServiceException, expectNonNull as __expectNonNull, expectObject as __expectObject, expectString as __expectString, getArrayIfSingleItem as __getArrayIfSingleItem, map, parseBoolean as __parseBoolean, parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset, strictParseFloat as __strictParseFloat, strictParseInt32 as __strictParseInt32, strictParseLong as __strictParseLong, withBaseException, } from "@smithy/smithy-client";
import { CidrBlockInUseException, CidrCollectionAlreadyExistsException, CidrCollectionInUseException, CidrCollectionVersionMismatchException, ConcurrentModification, ConflictingDomainExists, ConflictingTypes, DelegationSetAlreadyCreated, DelegationSetAlreadyReusable, DelegationSetInUse, DelegationSetNotAvailable, DelegationSetNotReusable, DNSSECNotFound, HealthCheckAlreadyExists, HealthCheckInUse, HealthCheckVersionMismatch, HostedZoneAlreadyExists, HostedZoneNotEmpty, HostedZoneNotFound, HostedZoneNotPrivate, HostedZonePartiallyDelegated, IncompatibleVersion, InsufficientCloudWatchLogsResourcePolicy, InvalidArgument, InvalidChangeBatch, InvalidDomainName, InvalidInput, InvalidKeySigningKeyName, InvalidKeySigningKeyStatus, InvalidKMSArn, InvalidPaginationToken, InvalidSigningStatus, InvalidTrafficPolicyDocument, InvalidVPCId, KeySigningKeyAlreadyExists, KeySigningKeyInParentDSRecord, KeySigningKeyInUse, KeySigningKeyWithActiveStatusNotFound, LastVPCAssociation, LimitsExceeded, NoSuchChange, NoSuchCidrCollectionException, NoSuchCidrLocationException, NoSuchCloudWatchLogsLogGroup, NoSuchDelegationSet, NoSuchGeoLocation, NoSuchHealthCheck, NoSuchHostedZone, NoSuchKeySigningKey, NoSuchQueryLoggingConfig, NoSuchTrafficPolicy, NoSuchTrafficPolicyInstance, NotAuthorizedException, PriorRequestNotComplete, PublicZoneVPCAssociation, QueryLoggingConfigAlreadyExists, ThrottlingException, TooManyHealthChecks, TooManyHostedZones, TooManyKeySigningKeys, TooManyTrafficPolicies, TooManyTrafficPolicyInstances, TooManyTrafficPolicyVersionsForCurrentPolicy, TooManyVPCAssociationAuthorizations, TrafficPolicyAlreadyExists, TrafficPolicyInstanceAlreadyExists, TrafficPolicyInUse, VPCAssociationAuthorizationNotFound, VPCAssociationNotFound, } from "../models/models_0";
import { Route53ServiceException as __BaseException } from "../models/Route53ServiceException";
export const se_ActivateKeySigningKeyCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/activate");
    b.p("HostedZoneId", () => input.HostedZoneId, "{HostedZoneId}", false);
    b.p("Name", () => input.Name, "{Name}", false);
    let body;
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_AssociateVPCWithHostedZoneCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/hostedzone/{HostedZoneId}/associatevpc");
    b.p("HostedZoneId", () => input.HostedZoneId, "{HostedZoneId}", false);
    let body;
    body = _ve;
    const bn = new __XmlNode(_AVPCWHZR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_C] != null) {
        bn.c(__XmlNode.of(_AVPCC, input[_C]).n(_C));
    }
    if (input[_VPC] != null) {
        bn.c(se_VPC(input[_VPC], context).n(_VPC));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_ChangeCidrCollectionCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/cidrcollection/{Id}");
    b.p("Id", () => input.Id, "{Id}", false);
    let body;
    body = _ve;
    const bn = new __XmlNode(_CCCR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    bn.lc(input, "Changes", "Changes", () => se_CidrCollectionChanges(input[_Ch], context));
    if (input[_CV] != null) {
        bn.c(__XmlNode.of(_CV, String(input[_CV])).n(_CV));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_ChangeResourceRecordSetsCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/hostedzone/{HostedZoneId}/rrset");
    b.p("HostedZoneId", () => input.HostedZoneId, "{HostedZoneId}", false);
    let body;
    body = _ve;
    const bn = new __XmlNode(_CRRSR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_CB] != null) {
        bn.c(se_ChangeBatch(input[_CB], context).n(_CB));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_ChangeTagsForResourceCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/tags/{ResourceType}/{ResourceId}");
    b.p("ResourceType", () => input.ResourceType, "{ResourceType}", false);
    b.p("ResourceId", () => input.ResourceId, "{ResourceId}", false);
    let body;
    body = _ve;
    const bn = new __XmlNode(_CTFRR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    bn.lc(input, "AddTags", "AddTags", () => se_TagList(input[_AT], context));
    bn.lc(input, "RemoveTagKeys", "RemoveTagKeys", () => se_TagKeyList(input[_RTK], context));
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_CreateCidrCollectionCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/cidrcollection");
    let body;
    body = _ve;
    const bn = new __XmlNode(_CCCRr);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_CR] != null) {
        bn.c(__XmlNode.of(_CN, input[_CR]).n(_CR));
    }
    if (input[_N] != null) {
        bn.c(__XmlNode.of(_CNo, input[_N]).n(_N));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_CreateHealthCheckCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/healthcheck");
    let body;
    body = _ve;
    const bn = new __XmlNode(_CHCR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_CR] != null) {
        bn.c(__XmlNode.of(_HCN, input[_CR]).n(_CR));
    }
    if (input[_HCC] != null) {
        bn.c(se_HealthCheckConfig(input[_HCC], context).n(_HCC));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_CreateHostedZoneCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/hostedzone");
    let body;
    body = _ve;
    const bn = new __XmlNode(_CHZR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_CR] != null) {
        bn.c(__XmlNode.of(_No, input[_CR]).n(_CR));
    }
    if (input[_DSI] != null) {
        bn.c(__XmlNode.of(_RI, input[_DSI]).n(_DSI));
    }
    if (input[_HZC] != null) {
        bn.c(se_HostedZoneConfig(input[_HZC], context).n(_HZC));
    }
    if (input[_N] != null) {
        bn.c(__XmlNode.of(_DNSN, input[_N]).n(_N));
    }
    if (input[_VPC] != null) {
        bn.c(se_VPC(input[_VPC], context).n(_VPC));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_CreateKeySigningKeyCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/keysigningkey");
    let body;
    body = _ve;
    const bn = new __XmlNode(_CKSKR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_CR] != null) {
        bn.c(__XmlNode.of(_No, input[_CR]).n(_CR));
    }
    if (input[_HZI] != null) {
        bn.c(__XmlNode.of(_RI, input[_HZI]).n(_HZI));
    }
    if (input[_KMSA] != null) {
        bn.c(__XmlNode.of(_SKS, input[_KMSA]).n(_KMSA));
    }
    if (input[_N] != null) {
        bn.c(__XmlNode.of(_SKN, input[_N]).n(_N));
    }
    if (input[_S] != null) {
        bn.c(__XmlNode.of(_SKSi, input[_S]).n(_S));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_CreateQueryLoggingConfigCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/queryloggingconfig");
    let body;
    body = _ve;
    const bn = new __XmlNode(_CQLCR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    bn.cc(input, _CWLLGA);
    if (input[_HZI] != null) {
        bn.c(__XmlNode.of(_RI, input[_HZI]).n(_HZI));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_CreateReusableDelegationSetCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/delegationset");
    let body;
    body = _ve;
    const bn = new __XmlNode(_CRDSR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_CR] != null) {
        bn.c(__XmlNode.of(_No, input[_CR]).n(_CR));
    }
    if (input[_HZI] != null) {
        bn.c(__XmlNode.of(_RI, input[_HZI]).n(_HZI));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_CreateTrafficPolicyCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/trafficpolicy");
    let body;
    body = _ve;
    const bn = new __XmlNode(_CTPR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_C] != null) {
        bn.c(__XmlNode.of(_TPC, input[_C]).n(_C));
    }
    if (input[_D] != null) {
        bn.c(__XmlNode.of(_TPD, input[_D]).n(_D));
    }
    if (input[_N] != null) {
        bn.c(__XmlNode.of(_TPN, input[_N]).n(_N));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_CreateTrafficPolicyInstanceCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/trafficpolicyinstance");
    let body;
    body = _ve;
    const bn = new __XmlNode(_CTPIR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_HZI] != null) {
        bn.c(__XmlNode.of(_RI, input[_HZI]).n(_HZI));
    }
    if (input[_N] != null) {
        bn.c(__XmlNode.of(_DNSN, input[_N]).n(_N));
    }
    if (input[_TTL] != null) {
        bn.c(__XmlNode.of(_TTL, String(input[_TTL])).n(_TTL));
    }
    bn.cc(input, _TPI);
    if (input[_TPV] != null) {
        bn.c(__XmlNode.of(_TPV, String(input[_TPV])).n(_TPV));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_CreateTrafficPolicyVersionCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/trafficpolicy/{Id}");
    b.p("Id", () => input.Id, "{Id}", false);
    let body;
    body = _ve;
    const bn = new __XmlNode(_CTPVR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_C] != null) {
        bn.c(__XmlNode.of(_TPC, input[_C]).n(_C));
    }
    if (input[_D] != null) {
        bn.c(__XmlNode.of(_TPD, input[_D]).n(_D));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_CreateVPCAssociationAuthorizationCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation");
    b.p("HostedZoneId", () => input.HostedZoneId, "{HostedZoneId}", false);
    let body;
    body = _ve;
    const bn = new __XmlNode(_CVPCAAR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_VPC] != null) {
        bn.c(se_VPC(input[_VPC], context).n(_VPC));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_DeactivateKeySigningKeyCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/deactivate");
    b.p("HostedZoneId", () => input.HostedZoneId, "{HostedZoneId}", false);
    b.p("Name", () => input.Name, "{Name}", false);
    let body;
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_DeleteCidrCollectionCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/cidrcollection/{Id}");
    b.p("Id", () => input.Id, "{Id}", false);
    let body;
    b.m("DELETE").h(headers).b(body);
    return b.build();
};
export const se_DeleteHealthCheckCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/healthcheck/{HealthCheckId}");
    b.p("HealthCheckId", () => input.HealthCheckId, "{HealthCheckId}", false);
    let body;
    b.m("DELETE").h(headers).b(body);
    return b.build();
};
export const se_DeleteHostedZoneCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/hostedzone/{Id}");
    b.p("Id", () => input.Id, "{Id}", false);
    let body;
    b.m("DELETE").h(headers).b(body);
    return b.build();
};
export const se_DeleteKeySigningKeyCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/keysigningkey/{HostedZoneId}/{Name}");
    b.p("HostedZoneId", () => input.HostedZoneId, "{HostedZoneId}", false);
    b.p("Name", () => input.Name, "{Name}", false);
    let body;
    b.m("DELETE").h(headers).b(body);
    return b.build();
};
export const se_DeleteQueryLoggingConfigCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/queryloggingconfig/{Id}");
    b.p("Id", () => input.Id, "{Id}", false);
    let body;
    b.m("DELETE").h(headers).b(body);
    return b.build();
};
export const se_DeleteReusableDelegationSetCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/delegationset/{Id}");
    b.p("Id", () => input.Id, "{Id}", false);
    let body;
    b.m("DELETE").h(headers).b(body);
    return b.build();
};
export const se_DeleteTrafficPolicyCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/trafficpolicy/{Id}/{Version}");
    b.p("Id", () => input.Id, "{Id}", false);
    b.p("Version", () => input.Version.toString(), "{Version}", false);
    let body;
    b.m("DELETE").h(headers).b(body);
    return b.build();
};
export const se_DeleteTrafficPolicyInstanceCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/trafficpolicyinstance/{Id}");
    b.p("Id", () => input.Id, "{Id}", false);
    let body;
    b.m("DELETE").h(headers).b(body);
    return b.build();
};
export const se_DeleteVPCAssociationAuthorizationCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/hostedzone/{HostedZoneId}/deauthorizevpcassociation");
    b.p("HostedZoneId", () => input.HostedZoneId, "{HostedZoneId}", false);
    let body;
    body = _ve;
    const bn = new __XmlNode(_DVPCAAR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_VPC] != null) {
        bn.c(se_VPC(input[_VPC], context).n(_VPC));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_DisableHostedZoneDNSSECCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/hostedzone/{HostedZoneId}/disable-dnssec");
    b.p("HostedZoneId", () => input.HostedZoneId, "{HostedZoneId}", false);
    let body;
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_DisassociateVPCFromHostedZoneCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/hostedzone/{HostedZoneId}/disassociatevpc");
    b.p("HostedZoneId", () => input.HostedZoneId, "{HostedZoneId}", false);
    let body;
    body = _ve;
    const bn = new __XmlNode(_DVPCFHZR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_C] != null) {
        bn.c(__XmlNode.of(_DVPCC, input[_C]).n(_C));
    }
    if (input[_VPC] != null) {
        bn.c(se_VPC(input[_VPC], context).n(_VPC));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_EnableHostedZoneDNSSECCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/hostedzone/{HostedZoneId}/enable-dnssec");
    b.p("HostedZoneId", () => input.HostedZoneId, "{HostedZoneId}", false);
    let body;
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_GetAccountLimitCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/accountlimit/{Type}");
    b.p("Type", () => input.Type, "{Type}", false);
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetChangeCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/change/{Id}");
    b.p("Id", () => input.Id, "{Id}", false);
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetCheckerIpRangesCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/checkeripranges");
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetDNSSECCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/hostedzone/{HostedZoneId}/dnssec");
    b.p("HostedZoneId", () => input.HostedZoneId, "{HostedZoneId}", false);
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetGeoLocationCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/geolocation");
    const query = map({
        [_c]: [, input[_CC]],
        [_co]: [, input[_CCo]],
        [_s]: [, input[_SC]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_GetHealthCheckCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/healthcheck/{HealthCheckId}");
    b.p("HealthCheckId", () => input.HealthCheckId, "{HealthCheckId}", false);
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetHealthCheckCountCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/healthcheckcount");
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetHealthCheckLastFailureReasonCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason");
    b.p("HealthCheckId", () => input.HealthCheckId, "{HealthCheckId}", false);
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetHealthCheckStatusCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/healthcheck/{HealthCheckId}/status");
    b.p("HealthCheckId", () => input.HealthCheckId, "{HealthCheckId}", false);
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetHostedZoneCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/hostedzone/{Id}");
    b.p("Id", () => input.Id, "{Id}", false);
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetHostedZoneCountCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/hostedzonecount");
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetHostedZoneLimitCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/hostedzonelimit/{HostedZoneId}/{Type}");
    b.p("Type", () => input.Type, "{Type}", false);
    b.p("HostedZoneId", () => input.HostedZoneId, "{HostedZoneId}", false);
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetQueryLoggingConfigCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/queryloggingconfig/{Id}");
    b.p("Id", () => input.Id, "{Id}", false);
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetReusableDelegationSetCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/delegationset/{Id}");
    b.p("Id", () => input.Id, "{Id}", false);
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetReusableDelegationSetLimitCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/reusabledelegationsetlimit/{DelegationSetId}/{Type}");
    b.p("Type", () => input.Type, "{Type}", false);
    b.p("DelegationSetId", () => input.DelegationSetId, "{DelegationSetId}", false);
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetTrafficPolicyCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/trafficpolicy/{Id}/{Version}");
    b.p("Id", () => input.Id, "{Id}", false);
    b.p("Version", () => input.Version.toString(), "{Version}", false);
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetTrafficPolicyInstanceCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/trafficpolicyinstance/{Id}");
    b.p("Id", () => input.Id, "{Id}", false);
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_GetTrafficPolicyInstanceCountCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/trafficpolicyinstancecount");
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_ListCidrBlocksCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/cidrcollection/{CollectionId}/cidrblocks");
    b.p("CollectionId", () => input.CollectionId, "{CollectionId}", false);
    const query = map({
        [_l]: [, input[_LN]],
        [_n]: [, input[_NT]],
        [_m]: [() => input.MaxResults !== void 0, () => input[_MR].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListCidrCollectionsCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/cidrcollection");
    const query = map({
        [_n]: [, input[_NT]],
        [_m]: [() => input.MaxResults !== void 0, () => input[_MR].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListCidrLocationsCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/cidrcollection/{CollectionId}");
    b.p("CollectionId", () => input.CollectionId, "{CollectionId}", false);
    const query = map({
        [_n]: [, input[_NT]],
        [_m]: [() => input.MaxResults !== void 0, () => input[_MR].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListGeoLocationsCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/geolocations");
    const query = map({
        [_st]: [, input[_SCC]],
        [_sta]: [, input[_SCCt]],
        [_star]: [, input[_SSC]],
        [_ma]: [() => input.MaxItems !== void 0, () => input[_MI].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListHealthChecksCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/healthcheck");
    const query = map({
        [_mar]: [, input[_M]],
        [_ma]: [() => input.MaxItems !== void 0, () => input[_MI].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListHostedZonesCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/hostedzone");
    const query = map({
        [_mar]: [, input[_M]],
        [_ma]: [() => input.MaxItems !== void 0, () => input[_MI].toString()],
        [_d]: [, input[_DSI]],
        [_h]: [, input[_HZT]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListHostedZonesByNameCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/hostedzonesbyname");
    const query = map({
        [_dn]: [, input[_DNSN]],
        [_ho]: [, input[_HZI]],
        [_ma]: [() => input.MaxItems !== void 0, () => input[_MI].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListHostedZonesByVPCCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/hostedzonesbyvpc");
    const query = map({
        [_v]: [, __expectNonNull(input[_VPCI], `VPCId`)],
        [_vp]: [, __expectNonNull(input[_VPCR], `VPCRegion`)],
        [_ma]: [() => input.MaxItems !== void 0, () => input[_MI].toString()],
        [_n]: [, input[_NT]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListQueryLoggingConfigsCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/queryloggingconfig");
    const query = map({
        [_ho]: [, input[_HZI]],
        [_n]: [, input[_NT]],
        [_m]: [() => input.MaxResults !== void 0, () => input[_MR].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListResourceRecordSetsCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/hostedzone/{HostedZoneId}/rrset");
    b.p("HostedZoneId", () => input.HostedZoneId, "{HostedZoneId}", false);
    const query = map({
        [_na]: [, input[_SRN]],
        [_t]: [, input[_SRT]],
        [_i]: [, input[_SRI]],
        [_ma]: [() => input.MaxItems !== void 0, () => input[_MI].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListReusableDelegationSetsCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/delegationset");
    const query = map({
        [_mar]: [, input[_M]],
        [_ma]: [() => input.MaxItems !== void 0, () => input[_MI].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListTagsForResourceCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/tags/{ResourceType}/{ResourceId}");
    b.p("ResourceType", () => input.ResourceType, "{ResourceType}", false);
    b.p("ResourceId", () => input.ResourceId, "{ResourceId}", false);
    let body;
    b.m("GET").h(headers).b(body);
    return b.build();
};
export const se_ListTagsForResourcesCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/tags/{ResourceType}");
    b.p("ResourceType", () => input.ResourceType, "{ResourceType}", false);
    let body;
    body = _ve;
    const bn = new __XmlNode(_LTFRR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    bn.lc(input, "ResourceIds", "ResourceIds", () => se_TagResourceIdList(input[_RIe], context));
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_ListTrafficPoliciesCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/trafficpolicies");
    const query = map({
        [_tr]: [, input[_TPIM]],
        [_ma]: [() => input.MaxItems !== void 0, () => input[_MI].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListTrafficPolicyInstancesCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/trafficpolicyinstances");
    const query = map({
        [_ho]: [, input[_HZIM]],
        [_tra]: [, input[_TPINM]],
        [_traf]: [, input[_TPITM]],
        [_ma]: [() => input.MaxItems !== void 0, () => input[_MI].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListTrafficPolicyInstancesByHostedZoneCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/trafficpolicyinstances/hostedzone");
    const query = map({
        [_id]: [, __expectNonNull(input[_HZI], `HostedZoneId`)],
        [_tra]: [, input[_TPINM]],
        [_traf]: [, input[_TPITM]],
        [_ma]: [() => input.MaxItems !== void 0, () => input[_MI].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListTrafficPolicyInstancesByPolicyCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/trafficpolicyinstances/trafficpolicy");
    const query = map({
        [_id]: [, __expectNonNull(input[_TPI], `TrafficPolicyId`)],
        [_ver]: [
            __expectNonNull(input.TrafficPolicyVersion, `TrafficPolicyVersion`) != null,
            () => input[_TPV].toString(),
        ],
        [_ho]: [, input[_HZIM]],
        [_tra]: [, input[_TPINM]],
        [_traf]: [, input[_TPITM]],
        [_ma]: [() => input.MaxItems !== void 0, () => input[_MI].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListTrafficPolicyVersionsCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/trafficpolicies/{Id}/versions");
    b.p("Id", () => input.Id, "{Id}", false);
    const query = map({
        [_traff]: [, input[_TPVM]],
        [_ma]: [() => input.MaxItems !== void 0, () => input[_MI].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_ListVPCAssociationAuthorizationsCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation");
    b.p("HostedZoneId", () => input.HostedZoneId, "{HostedZoneId}", false);
    const query = map({
        [_n]: [, input[_NT]],
        [_m]: [() => input.MaxResults !== void 0, () => input[_MR].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_TestDNSAnswerCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {};
    b.bp("/2013-04-01/testdnsanswer");
    const query = map({
        [_ho]: [, __expectNonNull(input[_HZI], `HostedZoneId`)],
        [_r]: [, __expectNonNull(input[_RN], `RecordName`)],
        [_re]: [, __expectNonNull(input[_RT], `RecordType`)],
        [_res]: [, input[_RIP]],
        [_e]: [, input[_EDNSCSIP]],
        [_ed]: [, input[_EDNSCSM]],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
export const se_UpdateHealthCheckCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/healthcheck/{HealthCheckId}");
    b.p("HealthCheckId", () => input.HealthCheckId, "{HealthCheckId}", false);
    let body;
    body = _ve;
    const bn = new __XmlNode(_UHCR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_AI] != null) {
        bn.c(se_AlarmIdentifier(input[_AI], context).n(_AI));
    }
    bn.lc(input, "ChildHealthChecks", "ChildHealthChecks", () => se_ChildHealthCheckList(input[_CHC], context));
    if (input[_Di] != null) {
        bn.c(__XmlNode.of(_Di, String(input[_Di])).n(_Di));
    }
    if (input[_ESNI] != null) {
        bn.c(__XmlNode.of(_ESNI, String(input[_ESNI])).n(_ESNI));
    }
    if (input[_FT] != null) {
        bn.c(__XmlNode.of(_FT, String(input[_FT])).n(_FT));
    }
    bn.cc(input, _FQDN);
    if (input[_HCV] != null) {
        bn.c(__XmlNode.of(_HCV, String(input[_HCV])).n(_HCV));
    }
    if (input[_HT] != null) {
        bn.c(__XmlNode.of(_HT, String(input[_HT])).n(_HT));
    }
    bn.cc(input, _IPA);
    bn.cc(input, _IDHS);
    if (input[_I] != null) {
        bn.c(__XmlNode.of(_I, String(input[_I])).n(_I));
    }
    if (input[_P] != null) {
        bn.c(__XmlNode.of(_P, String(input[_P])).n(_P));
    }
    bn.lc(input, "Regions", "Regions", () => se_HealthCheckRegionList(input[_R], context));
    bn.lc(input, "ResetElements", "ResetElements", () => se_ResettableElementNameList(input[_RE], context));
    bn.cc(input, _RP);
    bn.cc(input, _SS);
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_UpdateHostedZoneCommentCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/hostedzone/{Id}");
    b.p("Id", () => input.Id, "{Id}", false);
    let body;
    body = _ve;
    const bn = new __XmlNode(_UHZCR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_C] != null) {
        bn.c(__XmlNode.of(_RD, input[_C]).n(_C));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_UpdateTrafficPolicyCommentCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/trafficpolicy/{Id}/{Version}");
    b.p("Id", () => input.Id, "{Id}", false);
    b.p("Version", () => input.Version.toString(), "{Version}", false);
    let body;
    body = _ve;
    const bn = new __XmlNode(_UTPCR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_C] != null) {
        bn.c(__XmlNode.of(_TPC, input[_C]).n(_C));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_UpdateTrafficPolicyInstanceCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/xml",
    };
    b.bp("/2013-04-01/trafficpolicyinstance/{Id}");
    b.p("Id", () => input.Id, "{Id}", false);
    let body;
    body = _ve;
    const bn = new __XmlNode(_UTPIR);
    bn.a("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
    if (input[_TTL] != null) {
        bn.c(__XmlNode.of(_TTL, String(input[_TTL])).n(_TTL));
    }
    bn.cc(input, _TPI);
    if (input[_TPV] != null) {
        bn.c(__XmlNode.of(_TPV, String(input[_TPV])).n(_TPV));
    }
    body += bn.toString();
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const de_ActivateKeySigningKeyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_CI] != null) {
        contents[_CI] = de_ChangeInfo(data[_CI], context);
    }
    return contents;
};
export const de_AssociateVPCWithHostedZoneCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_CI] != null) {
        contents[_CI] = de_ChangeInfo(data[_CI], context);
    }
    return contents;
};
export const de_ChangeCidrCollectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_Id] != null) {
        contents[_Id] = __expectString(data[_Id]);
    }
    return contents;
};
export const de_ChangeResourceRecordSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_CI] != null) {
        contents[_CI] = de_ChangeInfo(data[_CI], context);
    }
    return contents;
};
export const de_ChangeTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
export const de_CreateCidrCollectionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        [_L]: [, output.headers[_l]],
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_Co] != null) {
        contents[_Co] = de_CidrCollection(data[_Co], context);
    }
    return contents;
};
export const de_CreateHealthCheckCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        [_L]: [, output.headers[_l]],
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_HC] != null) {
        contents[_HC] = de_HealthCheck(data[_HC], context);
    }
    return contents;
};
export const de_CreateHostedZoneCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        [_L]: [, output.headers[_l]],
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_CI] != null) {
        contents[_CI] = de_ChangeInfo(data[_CI], context);
    }
    if (data[_DS] != null) {
        contents[_DS] = de_DelegationSet(data[_DS], context);
    }
    if (data[_HZ] != null) {
        contents[_HZ] = de_HostedZone(data[_HZ], context);
    }
    if (data[_VPC] != null) {
        contents[_VPC] = de_VPC(data[_VPC], context);
    }
    return contents;
};
export const de_CreateKeySigningKeyCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        [_L]: [, output.headers[_l]],
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_CI] != null) {
        contents[_CI] = de_ChangeInfo(data[_CI], context);
    }
    if (data[_KSK] != null) {
        contents[_KSK] = de_KeySigningKey(data[_KSK], context);
    }
    return contents;
};
export const de_CreateQueryLoggingConfigCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        [_L]: [, output.headers[_l]],
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_QLC] != null) {
        contents[_QLC] = de_QueryLoggingConfig(data[_QLC], context);
    }
    return contents;
};
export const de_CreateReusableDelegationSetCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        [_L]: [, output.headers[_l]],
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_DS] != null) {
        contents[_DS] = de_DelegationSet(data[_DS], context);
    }
    return contents;
};
export const de_CreateTrafficPolicyCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        [_L]: [, output.headers[_l]],
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_TP] != null) {
        contents[_TP] = de_TrafficPolicy(data[_TP], context);
    }
    return contents;
};
export const de_CreateTrafficPolicyInstanceCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        [_L]: [, output.headers[_l]],
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_TPIr] != null) {
        contents[_TPIr] = de_TrafficPolicyInstance(data[_TPIr], context);
    }
    return contents;
};
export const de_CreateTrafficPolicyVersionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        [_L]: [, output.headers[_l]],
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_TP] != null) {
        contents[_TP] = de_TrafficPolicy(data[_TP], context);
    }
    return contents;
};
export const de_CreateVPCAssociationAuthorizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_HZI] != null) {
        contents[_HZI] = __expectString(data[_HZI]);
    }
    if (data[_VPC] != null) {
        contents[_VPC] = de_VPC(data[_VPC], context);
    }
    return contents;
};
export const de_DeactivateKeySigningKeyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_CI] != null) {
        contents[_CI] = de_ChangeInfo(data[_CI], context);
    }
    return contents;
};
export const de_DeleteCidrCollectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
export const de_DeleteHealthCheckCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
export const de_DeleteHostedZoneCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_CI] != null) {
        contents[_CI] = de_ChangeInfo(data[_CI], context);
    }
    return contents;
};
export const de_DeleteKeySigningKeyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_CI] != null) {
        contents[_CI] = de_ChangeInfo(data[_CI], context);
    }
    return contents;
};
export const de_DeleteQueryLoggingConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
export const de_DeleteReusableDelegationSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
export const de_DeleteTrafficPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
export const de_DeleteTrafficPolicyInstanceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
export const de_DeleteVPCAssociationAuthorizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
export const de_DisableHostedZoneDNSSECCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_CI] != null) {
        contents[_CI] = de_ChangeInfo(data[_CI], context);
    }
    return contents;
};
export const de_DisassociateVPCFromHostedZoneCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_CI] != null) {
        contents[_CI] = de_ChangeInfo(data[_CI], context);
    }
    return contents;
};
export const de_EnableHostedZoneDNSSECCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_CI] != null) {
        contents[_CI] = de_ChangeInfo(data[_CI], context);
    }
    return contents;
};
export const de_GetAccountLimitCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_Cou] != null) {
        contents[_Cou] = __strictParseLong(data[_Cou]);
    }
    if (data[_Li] != null) {
        contents[_Li] = de_AccountLimit(data[_Li], context);
    }
    return contents;
};
export const de_GetChangeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_CI] != null) {
        contents[_CI] = de_ChangeInfo(data[_CI], context);
    }
    return contents;
};
export const de_GetCheckerIpRangesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.CheckerIpRanges === "") {
        contents[_CIR] = [];
    }
    else if (data[_CIR] != null && data[_CIR][_me] != null) {
        contents[_CIR] = de_CheckerIpRanges(__getArrayIfSingleItem(data[_CIR][_me]), context);
    }
    return contents;
};
export const de_GetDNSSECCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.KeySigningKeys === "") {
        contents[_KSKe] = [];
    }
    else if (data[_KSKe] != null && data[_KSKe][_me] != null) {
        contents[_KSKe] = de_KeySigningKeys(__getArrayIfSingleItem(data[_KSKe][_me]), context);
    }
    if (data[_S] != null) {
        contents[_S] = de_DNSSECStatus(data[_S], context);
    }
    return contents;
};
export const de_GetGeoLocationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_GLD] != null) {
        contents[_GLD] = de_GeoLocationDetails(data[_GLD], context);
    }
    return contents;
};
export const de_GetHealthCheckCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_HC] != null) {
        contents[_HC] = de_HealthCheck(data[_HC], context);
    }
    return contents;
};
export const de_GetHealthCheckCountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_HCCe] != null) {
        contents[_HCCe] = __strictParseLong(data[_HCCe]);
    }
    return contents;
};
export const de_GetHealthCheckLastFailureReasonCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.HealthCheckObservations === "") {
        contents[_HCO] = [];
    }
    else if (data[_HCO] != null && data[_HCO][_HCOe] != null) {
        contents[_HCO] = de_HealthCheckObservations(__getArrayIfSingleItem(data[_HCO][_HCOe]), context);
    }
    return contents;
};
export const de_GetHealthCheckStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.HealthCheckObservations === "") {
        contents[_HCO] = [];
    }
    else if (data[_HCO] != null && data[_HCO][_HCOe] != null) {
        contents[_HCO] = de_HealthCheckObservations(__getArrayIfSingleItem(data[_HCO][_HCOe]), context);
    }
    return contents;
};
export const de_GetHostedZoneCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_DS] != null) {
        contents[_DS] = de_DelegationSet(data[_DS], context);
    }
    if (data[_HZ] != null) {
        contents[_HZ] = de_HostedZone(data[_HZ], context);
    }
    if (data.VPCs === "") {
        contents[_VPCs] = [];
    }
    else if (data[_VPCs] != null && data[_VPCs][_VPC] != null) {
        contents[_VPCs] = de_VPCs(__getArrayIfSingleItem(data[_VPCs][_VPC]), context);
    }
    return contents;
};
export const de_GetHostedZoneCountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_HZCo] != null) {
        contents[_HZCo] = __strictParseLong(data[_HZCo]);
    }
    return contents;
};
export const de_GetHostedZoneLimitCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_Cou] != null) {
        contents[_Cou] = __strictParseLong(data[_Cou]);
    }
    if (data[_Li] != null) {
        contents[_Li] = de_HostedZoneLimit(data[_Li], context);
    }
    return contents;
};
export const de_GetQueryLoggingConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_QLC] != null) {
        contents[_QLC] = de_QueryLoggingConfig(data[_QLC], context);
    }
    return contents;
};
export const de_GetReusableDelegationSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_DS] != null) {
        contents[_DS] = de_DelegationSet(data[_DS], context);
    }
    return contents;
};
export const de_GetReusableDelegationSetLimitCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_Cou] != null) {
        contents[_Cou] = __strictParseLong(data[_Cou]);
    }
    if (data[_Li] != null) {
        contents[_Li] = de_ReusableDelegationSetLimit(data[_Li], context);
    }
    return contents;
};
export const de_GetTrafficPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_TP] != null) {
        contents[_TP] = de_TrafficPolicy(data[_TP], context);
    }
    return contents;
};
export const de_GetTrafficPolicyInstanceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_TPIr] != null) {
        contents[_TPIr] = de_TrafficPolicyInstance(data[_TPIr], context);
    }
    return contents;
};
export const de_GetTrafficPolicyInstanceCountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_TPIC] != null) {
        contents[_TPIC] = __strictParseInt32(data[_TPIC]);
    }
    return contents;
};
export const de_ListCidrBlocksCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.CidrBlocks === "") {
        contents[_CBi] = [];
    }
    else if (data[_CBi] != null && data[_CBi][_me] != null) {
        contents[_CBi] = de_CidrBlockSummaries(__getArrayIfSingleItem(data[_CBi][_me]), context);
    }
    if (data[_NT] != null) {
        contents[_NT] = __expectString(data[_NT]);
    }
    return contents;
};
export const de_ListCidrCollectionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.CidrCollections === "") {
        contents[_CCi] = [];
    }
    else if (data[_CCi] != null && data[_CCi][_me] != null) {
        contents[_CCi] = de_CollectionSummaries(__getArrayIfSingleItem(data[_CCi][_me]), context);
    }
    if (data[_NT] != null) {
        contents[_NT] = __expectString(data[_NT]);
    }
    return contents;
};
export const de_ListCidrLocationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.CidrLocations === "") {
        contents[_CL] = [];
    }
    else if (data[_CL] != null && data[_CL][_me] != null) {
        contents[_CL] = de_LocationSummaries(__getArrayIfSingleItem(data[_CL][_me]), context);
    }
    if (data[_NT] != null) {
        contents[_NT] = __expectString(data[_NT]);
    }
    return contents;
};
export const de_ListGeoLocationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.GeoLocationDetailsList === "") {
        contents[_GLDL] = [];
    }
    else if (data[_GLDL] != null && data[_GLDL][_GLD] != null) {
        contents[_GLDL] = de_GeoLocationDetailsList(__getArrayIfSingleItem(data[_GLDL][_GLD]), context);
    }
    if (data[_IT] != null) {
        contents[_IT] = __parseBoolean(data[_IT]);
    }
    if (data[_MI] != null) {
        contents[_MI] = __strictParseInt32(data[_MI]);
    }
    if (data[_NCC] != null) {
        contents[_NCC] = __expectString(data[_NCC]);
    }
    if (data[_NCCe] != null) {
        contents[_NCCe] = __expectString(data[_NCCe]);
    }
    if (data[_NSC] != null) {
        contents[_NSC] = __expectString(data[_NSC]);
    }
    return contents;
};
export const de_ListHealthChecksCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.HealthChecks === "") {
        contents[_HCe] = [];
    }
    else if (data[_HCe] != null && data[_HCe][_HC] != null) {
        contents[_HCe] = de_HealthChecks(__getArrayIfSingleItem(data[_HCe][_HC]), context);
    }
    if (data[_IT] != null) {
        contents[_IT] = __parseBoolean(data[_IT]);
    }
    if (data[_M] != null) {
        contents[_M] = __expectString(data[_M]);
    }
    if (data[_MI] != null) {
        contents[_MI] = __strictParseInt32(data[_MI]);
    }
    if (data[_NM] != null) {
        contents[_NM] = __expectString(data[_NM]);
    }
    return contents;
};
export const de_ListHostedZonesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.HostedZones === "") {
        contents[_HZo] = [];
    }
    else if (data[_HZo] != null && data[_HZo][_HZ] != null) {
        contents[_HZo] = de_HostedZones(__getArrayIfSingleItem(data[_HZo][_HZ]), context);
    }
    if (data[_IT] != null) {
        contents[_IT] = __parseBoolean(data[_IT]);
    }
    if (data[_M] != null) {
        contents[_M] = __expectString(data[_M]);
    }
    if (data[_MI] != null) {
        contents[_MI] = __strictParseInt32(data[_MI]);
    }
    if (data[_NM] != null) {
        contents[_NM] = __expectString(data[_NM]);
    }
    return contents;
};
export const de_ListHostedZonesByNameCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_DNSN] != null) {
        contents[_DNSN] = __expectString(data[_DNSN]);
    }
    if (data[_HZI] != null) {
        contents[_HZI] = __expectString(data[_HZI]);
    }
    if (data.HostedZones === "") {
        contents[_HZo] = [];
    }
    else if (data[_HZo] != null && data[_HZo][_HZ] != null) {
        contents[_HZo] = de_HostedZones(__getArrayIfSingleItem(data[_HZo][_HZ]), context);
    }
    if (data[_IT] != null) {
        contents[_IT] = __parseBoolean(data[_IT]);
    }
    if (data[_MI] != null) {
        contents[_MI] = __strictParseInt32(data[_MI]);
    }
    if (data[_NDNSN] != null) {
        contents[_NDNSN] = __expectString(data[_NDNSN]);
    }
    if (data[_NHZI] != null) {
        contents[_NHZI] = __expectString(data[_NHZI]);
    }
    return contents;
};
export const de_ListHostedZonesByVPCCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.HostedZoneSummaries === "") {
        contents[_HZS] = [];
    }
    else if (data[_HZS] != null && data[_HZS][_HZSo] != null) {
        contents[_HZS] = de_HostedZoneSummaries(__getArrayIfSingleItem(data[_HZS][_HZSo]), context);
    }
    if (data[_MI] != null) {
        contents[_MI] = __strictParseInt32(data[_MI]);
    }
    if (data[_NT] != null) {
        contents[_NT] = __expectString(data[_NT]);
    }
    return contents;
};
export const de_ListQueryLoggingConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_NT] != null) {
        contents[_NT] = __expectString(data[_NT]);
    }
    if (data.QueryLoggingConfigs === "") {
        contents[_QLCu] = [];
    }
    else if (data[_QLCu] != null && data[_QLCu][_QLC] != null) {
        contents[_QLCu] = de_QueryLoggingConfigs(__getArrayIfSingleItem(data[_QLCu][_QLC]), context);
    }
    return contents;
};
export const de_ListResourceRecordSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_IT] != null) {
        contents[_IT] = __parseBoolean(data[_IT]);
    }
    if (data[_MI] != null) {
        contents[_MI] = __strictParseInt32(data[_MI]);
    }
    if (data[_NRI] != null) {
        contents[_NRI] = __expectString(data[_NRI]);
    }
    if (data[_NRN] != null) {
        contents[_NRN] = __expectString(data[_NRN]);
    }
    if (data[_NRT] != null) {
        contents[_NRT] = __expectString(data[_NRT]);
    }
    if (data.ResourceRecordSets === "") {
        contents[_RRS] = [];
    }
    else if (data[_RRS] != null && data[_RRS][_RRSe] != null) {
        contents[_RRS] = de_ResourceRecordSets(__getArrayIfSingleItem(data[_RRS][_RRSe]), context);
    }
    return contents;
};
export const de_ListReusableDelegationSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.DelegationSets === "") {
        contents[_DSe] = [];
    }
    else if (data[_DSe] != null && data[_DSe][_DS] != null) {
        contents[_DSe] = de_DelegationSets(__getArrayIfSingleItem(data[_DSe][_DS]), context);
    }
    if (data[_IT] != null) {
        contents[_IT] = __parseBoolean(data[_IT]);
    }
    if (data[_M] != null) {
        contents[_M] = __expectString(data[_M]);
    }
    if (data[_MI] != null) {
        contents[_MI] = __strictParseInt32(data[_MI]);
    }
    if (data[_NM] != null) {
        contents[_NM] = __expectString(data[_NM]);
    }
    return contents;
};
export const de_ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_RTS] != null) {
        contents[_RTS] = de_ResourceTagSet(data[_RTS], context);
    }
    return contents;
};
export const de_ListTagsForResourcesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data.ResourceTagSets === "") {
        contents[_RTSe] = [];
    }
    else if (data[_RTSe] != null && data[_RTSe][_RTS] != null) {
        contents[_RTSe] = de_ResourceTagSetList(__getArrayIfSingleItem(data[_RTSe][_RTS]), context);
    }
    return contents;
};
export const de_ListTrafficPoliciesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_IT] != null) {
        contents[_IT] = __parseBoolean(data[_IT]);
    }
    if (data[_MI] != null) {
        contents[_MI] = __strictParseInt32(data[_MI]);
    }
    if (data[_TPIM] != null) {
        contents[_TPIM] = __expectString(data[_TPIM]);
    }
    if (data.TrafficPolicySummaries === "") {
        contents[_TPS] = [];
    }
    else if (data[_TPS] != null && data[_TPS][_TPSr] != null) {
        contents[_TPS] = de_TrafficPolicySummaries(__getArrayIfSingleItem(data[_TPS][_TPSr]), context);
    }
    return contents;
};
export const de_ListTrafficPolicyInstancesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_HZIM] != null) {
        contents[_HZIM] = __expectString(data[_HZIM]);
    }
    if (data[_IT] != null) {
        contents[_IT] = __parseBoolean(data[_IT]);
    }
    if (data[_MI] != null) {
        contents[_MI] = __strictParseInt32(data[_MI]);
    }
    if (data[_TPINM] != null) {
        contents[_TPINM] = __expectString(data[_TPINM]);
    }
    if (data[_TPITM] != null) {
        contents[_TPITM] = __expectString(data[_TPITM]);
    }
    if (data.TrafficPolicyInstances === "") {
        contents[_TPIra] = [];
    }
    else if (data[_TPIra] != null && data[_TPIra][_TPIr] != null) {
        contents[_TPIra] = de_TrafficPolicyInstances(__getArrayIfSingleItem(data[_TPIra][_TPIr]), context);
    }
    return contents;
};
export const de_ListTrafficPolicyInstancesByHostedZoneCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_IT] != null) {
        contents[_IT] = __parseBoolean(data[_IT]);
    }
    if (data[_MI] != null) {
        contents[_MI] = __strictParseInt32(data[_MI]);
    }
    if (data[_TPINM] != null) {
        contents[_TPINM] = __expectString(data[_TPINM]);
    }
    if (data[_TPITM] != null) {
        contents[_TPITM] = __expectString(data[_TPITM]);
    }
    if (data.TrafficPolicyInstances === "") {
        contents[_TPIra] = [];
    }
    else if (data[_TPIra] != null && data[_TPIra][_TPIr] != null) {
        contents[_TPIra] = de_TrafficPolicyInstances(__getArrayIfSingleItem(data[_TPIra][_TPIr]), context);
    }
    return contents;
};
export const de_ListTrafficPolicyInstancesByPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_HZIM] != null) {
        contents[_HZIM] = __expectString(data[_HZIM]);
    }
    if (data[_IT] != null) {
        contents[_IT] = __parseBoolean(data[_IT]);
    }
    if (data[_MI] != null) {
        contents[_MI] = __strictParseInt32(data[_MI]);
    }
    if (data[_TPINM] != null) {
        contents[_TPINM] = __expectString(data[_TPINM]);
    }
    if (data[_TPITM] != null) {
        contents[_TPITM] = __expectString(data[_TPITM]);
    }
    if (data.TrafficPolicyInstances === "") {
        contents[_TPIra] = [];
    }
    else if (data[_TPIra] != null && data[_TPIra][_TPIr] != null) {
        contents[_TPIra] = de_TrafficPolicyInstances(__getArrayIfSingleItem(data[_TPIra][_TPIr]), context);
    }
    return contents;
};
export const de_ListTrafficPolicyVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_IT] != null) {
        contents[_IT] = __parseBoolean(data[_IT]);
    }
    if (data[_MI] != null) {
        contents[_MI] = __strictParseInt32(data[_MI]);
    }
    if (data.TrafficPolicies === "") {
        contents[_TPr] = [];
    }
    else if (data[_TPr] != null && data[_TPr][_TP] != null) {
        contents[_TPr] = de_TrafficPolicies(__getArrayIfSingleItem(data[_TPr][_TP]), context);
    }
    if (data[_TPVM] != null) {
        contents[_TPVM] = __expectString(data[_TPVM]);
    }
    return contents;
};
export const de_ListVPCAssociationAuthorizationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_HZI] != null) {
        contents[_HZI] = __expectString(data[_HZI]);
    }
    if (data[_NT] != null) {
        contents[_NT] = __expectString(data[_NT]);
    }
    if (data.VPCs === "") {
        contents[_VPCs] = [];
    }
    else if (data[_VPCs] != null && data[_VPCs][_VPC] != null) {
        contents[_VPCs] = de_VPCs(__getArrayIfSingleItem(data[_VPCs][_VPC]), context);
    }
    return contents;
};
export const de_TestDNSAnswerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_Na] != null) {
        contents[_Na] = __expectString(data[_Na]);
    }
    if (data[_Pr] != null) {
        contents[_Pr] = __expectString(data[_Pr]);
    }
    if (data.RecordData === "") {
        contents[_RDe] = [];
    }
    else if (data[_RDe] != null && data[_RDe][_RDE] != null) {
        contents[_RDe] = de_RecordData(__getArrayIfSingleItem(data[_RDe][_RDE]), context);
    }
    if (data[_RN] != null) {
        contents[_RN] = __expectString(data[_RN]);
    }
    if (data[_RT] != null) {
        contents[_RT] = __expectString(data[_RT]);
    }
    if (data[_RC] != null) {
        contents[_RC] = __expectString(data[_RC]);
    }
    return contents;
};
export const de_UpdateHealthCheckCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_HC] != null) {
        contents[_HC] = de_HealthCheck(data[_HC], context);
    }
    return contents;
};
export const de_UpdateHostedZoneCommentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_HZ] != null) {
        contents[_HZ] = de_HostedZone(data[_HZ], context);
    }
    return contents;
};
export const de_UpdateTrafficPolicyCommentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_TP] != null) {
        contents[_TP] = de_TrafficPolicy(data[_TP], context);
    }
    return contents;
};
export const de_UpdateTrafficPolicyInstanceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    if (data[_TPIr] != null) {
        contents[_TPIr] = de_TrafficPolicyInstance(data[_TPIr], context);
    }
    return contents;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModification":
        case "com.amazonaws.route53#ConcurrentModification":
            throw await de_ConcurrentModificationRes(parsedOutput, context);
        case "InvalidInput":
        case "com.amazonaws.route53#InvalidInput":
            throw await de_InvalidInputRes(parsedOutput, context);
        case "InvalidKMSArn":
        case "com.amazonaws.route53#InvalidKMSArn":
            throw await de_InvalidKMSArnRes(parsedOutput, context);
        case "InvalidKeySigningKeyStatus":
        case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
            throw await de_InvalidKeySigningKeyStatusRes(parsedOutput, context);
        case "InvalidSigningStatus":
        case "com.amazonaws.route53#InvalidSigningStatus":
            throw await de_InvalidSigningStatusRes(parsedOutput, context);
        case "NoSuchKeySigningKey":
        case "com.amazonaws.route53#NoSuchKeySigningKey":
            throw await de_NoSuchKeySigningKeyRes(parsedOutput, context);
        case "ConflictingDomainExists":
        case "com.amazonaws.route53#ConflictingDomainExists":
            throw await de_ConflictingDomainExistsRes(parsedOutput, context);
        case "InvalidVPCId":
        case "com.amazonaws.route53#InvalidVPCId":
            throw await de_InvalidVPCIdRes(parsedOutput, context);
        case "LimitsExceeded":
        case "com.amazonaws.route53#LimitsExceeded":
            throw await de_LimitsExceededRes(parsedOutput, context);
        case "NoSuchHostedZone":
        case "com.amazonaws.route53#NoSuchHostedZone":
            throw await de_NoSuchHostedZoneRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.route53#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "PriorRequestNotComplete":
        case "com.amazonaws.route53#PriorRequestNotComplete":
            throw await de_PriorRequestNotCompleteRes(parsedOutput, context);
        case "PublicZoneVPCAssociation":
        case "com.amazonaws.route53#PublicZoneVPCAssociation":
            throw await de_PublicZoneVPCAssociationRes(parsedOutput, context);
        case "CidrBlockInUseException":
        case "com.amazonaws.route53#CidrBlockInUseException":
            throw await de_CidrBlockInUseExceptionRes(parsedOutput, context);
        case "CidrCollectionVersionMismatchException":
        case "com.amazonaws.route53#CidrCollectionVersionMismatchException":
            throw await de_CidrCollectionVersionMismatchExceptionRes(parsedOutput, context);
        case "NoSuchCidrCollectionException":
        case "com.amazonaws.route53#NoSuchCidrCollectionException":
            throw await de_NoSuchCidrCollectionExceptionRes(parsedOutput, context);
        case "InvalidChangeBatch":
        case "com.amazonaws.route53#InvalidChangeBatch":
            throw await de_InvalidChangeBatchRes(parsedOutput, context);
        case "NoSuchHealthCheck":
        case "com.amazonaws.route53#NoSuchHealthCheck":
            throw await de_NoSuchHealthCheckRes(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.route53#ThrottlingException":
            throw await de_ThrottlingExceptionRes(parsedOutput, context);
        case "CidrCollectionAlreadyExistsException":
        case "com.amazonaws.route53#CidrCollectionAlreadyExistsException":
            throw await de_CidrCollectionAlreadyExistsExceptionRes(parsedOutput, context);
        case "HealthCheckAlreadyExists":
        case "com.amazonaws.route53#HealthCheckAlreadyExists":
            throw await de_HealthCheckAlreadyExistsRes(parsedOutput, context);
        case "TooManyHealthChecks":
        case "com.amazonaws.route53#TooManyHealthChecks":
            throw await de_TooManyHealthChecksRes(parsedOutput, context);
        case "DelegationSetNotAvailable":
        case "com.amazonaws.route53#DelegationSetNotAvailable":
            throw await de_DelegationSetNotAvailableRes(parsedOutput, context);
        case "DelegationSetNotReusable":
        case "com.amazonaws.route53#DelegationSetNotReusable":
            throw await de_DelegationSetNotReusableRes(parsedOutput, context);
        case "HostedZoneAlreadyExists":
        case "com.amazonaws.route53#HostedZoneAlreadyExists":
            throw await de_HostedZoneAlreadyExistsRes(parsedOutput, context);
        case "InvalidDomainName":
        case "com.amazonaws.route53#InvalidDomainName":
            throw await de_InvalidDomainNameRes(parsedOutput, context);
        case "NoSuchDelegationSet":
        case "com.amazonaws.route53#NoSuchDelegationSet":
            throw await de_NoSuchDelegationSetRes(parsedOutput, context);
        case "TooManyHostedZones":
        case "com.amazonaws.route53#TooManyHostedZones":
            throw await de_TooManyHostedZonesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.route53#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidKeySigningKeyName":
        case "com.amazonaws.route53#InvalidKeySigningKeyName":
            throw await de_InvalidKeySigningKeyNameRes(parsedOutput, context);
        case "KeySigningKeyAlreadyExists":
        case "com.amazonaws.route53#KeySigningKeyAlreadyExists":
            throw await de_KeySigningKeyAlreadyExistsRes(parsedOutput, context);
        case "TooManyKeySigningKeys":
        case "com.amazonaws.route53#TooManyKeySigningKeys":
            throw await de_TooManyKeySigningKeysRes(parsedOutput, context);
        case "InsufficientCloudWatchLogsResourcePolicy":
        case "com.amazonaws.route53#InsufficientCloudWatchLogsResourcePolicy":
            throw await de_InsufficientCloudWatchLogsResourcePolicyRes(parsedOutput, context);
        case "NoSuchCloudWatchLogsLogGroup":
        case "com.amazonaws.route53#NoSuchCloudWatchLogsLogGroup":
            throw await de_NoSuchCloudWatchLogsLogGroupRes(parsedOutput, context);
        case "QueryLoggingConfigAlreadyExists":
        case "com.amazonaws.route53#QueryLoggingConfigAlreadyExists":
            throw await de_QueryLoggingConfigAlreadyExistsRes(parsedOutput, context);
        case "DelegationSetAlreadyCreated":
        case "com.amazonaws.route53#DelegationSetAlreadyCreated":
            throw await de_DelegationSetAlreadyCreatedRes(parsedOutput, context);
        case "DelegationSetAlreadyReusable":
        case "com.amazonaws.route53#DelegationSetAlreadyReusable":
            throw await de_DelegationSetAlreadyReusableRes(parsedOutput, context);
        case "HostedZoneNotFound":
        case "com.amazonaws.route53#HostedZoneNotFound":
            throw await de_HostedZoneNotFoundRes(parsedOutput, context);
        case "InvalidTrafficPolicyDocument":
        case "com.amazonaws.route53#InvalidTrafficPolicyDocument":
            throw await de_InvalidTrafficPolicyDocumentRes(parsedOutput, context);
        case "TooManyTrafficPolicies":
        case "com.amazonaws.route53#TooManyTrafficPolicies":
            throw await de_TooManyTrafficPoliciesRes(parsedOutput, context);
        case "TrafficPolicyAlreadyExists":
        case "com.amazonaws.route53#TrafficPolicyAlreadyExists":
            throw await de_TrafficPolicyAlreadyExistsRes(parsedOutput, context);
        case "NoSuchTrafficPolicy":
        case "com.amazonaws.route53#NoSuchTrafficPolicy":
            throw await de_NoSuchTrafficPolicyRes(parsedOutput, context);
        case "TooManyTrafficPolicyInstances":
        case "com.amazonaws.route53#TooManyTrafficPolicyInstances":
            throw await de_TooManyTrafficPolicyInstancesRes(parsedOutput, context);
        case "TrafficPolicyInstanceAlreadyExists":
        case "com.amazonaws.route53#TrafficPolicyInstanceAlreadyExists":
            throw await de_TrafficPolicyInstanceAlreadyExistsRes(parsedOutput, context);
        case "TooManyTrafficPolicyVersionsForCurrentPolicy":
        case "com.amazonaws.route53#TooManyTrafficPolicyVersionsForCurrentPolicy":
            throw await de_TooManyTrafficPolicyVersionsForCurrentPolicyRes(parsedOutput, context);
        case "TooManyVPCAssociationAuthorizations":
        case "com.amazonaws.route53#TooManyVPCAssociationAuthorizations":
            throw await de_TooManyVPCAssociationAuthorizationsRes(parsedOutput, context);
        case "KeySigningKeyInParentDSRecord":
        case "com.amazonaws.route53#KeySigningKeyInParentDSRecord":
            throw await de_KeySigningKeyInParentDSRecordRes(parsedOutput, context);
        case "KeySigningKeyInUse":
        case "com.amazonaws.route53#KeySigningKeyInUse":
            throw await de_KeySigningKeyInUseRes(parsedOutput, context);
        case "CidrCollectionInUseException":
        case "com.amazonaws.route53#CidrCollectionInUseException":
            throw await de_CidrCollectionInUseExceptionRes(parsedOutput, context);
        case "HealthCheckInUse":
        case "com.amazonaws.route53#HealthCheckInUse":
            throw await de_HealthCheckInUseRes(parsedOutput, context);
        case "HostedZoneNotEmpty":
        case "com.amazonaws.route53#HostedZoneNotEmpty":
            throw await de_HostedZoneNotEmptyRes(parsedOutput, context);
        case "NoSuchQueryLoggingConfig":
        case "com.amazonaws.route53#NoSuchQueryLoggingConfig":
            throw await de_NoSuchQueryLoggingConfigRes(parsedOutput, context);
        case "DelegationSetInUse":
        case "com.amazonaws.route53#DelegationSetInUse":
            throw await de_DelegationSetInUseRes(parsedOutput, context);
        case "TrafficPolicyInUse":
        case "com.amazonaws.route53#TrafficPolicyInUse":
            throw await de_TrafficPolicyInUseRes(parsedOutput, context);
        case "NoSuchTrafficPolicyInstance":
        case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
            throw await de_NoSuchTrafficPolicyInstanceRes(parsedOutput, context);
        case "VPCAssociationAuthorizationNotFound":
        case "com.amazonaws.route53#VPCAssociationAuthorizationNotFound":
            throw await de_VPCAssociationAuthorizationNotFoundRes(parsedOutput, context);
        case "DNSSECNotFound":
        case "com.amazonaws.route53#DNSSECNotFound":
            throw await de_DNSSECNotFoundRes(parsedOutput, context);
        case "LastVPCAssociation":
        case "com.amazonaws.route53#LastVPCAssociation":
            throw await de_LastVPCAssociationRes(parsedOutput, context);
        case "VPCAssociationNotFound":
        case "com.amazonaws.route53#VPCAssociationNotFound":
            throw await de_VPCAssociationNotFoundRes(parsedOutput, context);
        case "HostedZonePartiallyDelegated":
        case "com.amazonaws.route53#HostedZonePartiallyDelegated":
            throw await de_HostedZonePartiallyDelegatedRes(parsedOutput, context);
        case "KeySigningKeyWithActiveStatusNotFound":
        case "com.amazonaws.route53#KeySigningKeyWithActiveStatusNotFound":
            throw await de_KeySigningKeyWithActiveStatusNotFoundRes(parsedOutput, context);
        case "NoSuchChange":
        case "com.amazonaws.route53#NoSuchChange":
            throw await de_NoSuchChangeRes(parsedOutput, context);
        case "NoSuchGeoLocation":
        case "com.amazonaws.route53#NoSuchGeoLocation":
            throw await de_NoSuchGeoLocationRes(parsedOutput, context);
        case "IncompatibleVersion":
        case "com.amazonaws.route53#IncompatibleVersion":
            throw await de_IncompatibleVersionRes(parsedOutput, context);
        case "HostedZoneNotPrivate":
        case "com.amazonaws.route53#HostedZoneNotPrivate":
            throw await de_HostedZoneNotPrivateRes(parsedOutput, context);
        case "NoSuchCidrLocationException":
        case "com.amazonaws.route53#NoSuchCidrLocationException":
            throw await de_NoSuchCidrLocationExceptionRes(parsedOutput, context);
        case "InvalidPaginationToken":
        case "com.amazonaws.route53#InvalidPaginationToken":
            throw await de_InvalidPaginationTokenRes(parsedOutput, context);
        case "HealthCheckVersionMismatch":
        case "com.amazonaws.route53#HealthCheckVersionMismatch":
            throw await de_HealthCheckVersionMismatchRes(parsedOutput, context);
        case "ConflictingTypes":
        case "com.amazonaws.route53#ConflictingTypes":
            throw await de_ConflictingTypesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const throwDefaultError = withBaseException(__BaseException);
const de_CidrBlockInUseExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_Me] != null) {
        contents[_Me] = __expectString(data[_Me]);
    }
    const exception = new CidrBlockInUseException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_CidrCollectionAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_Me] != null) {
        contents[_Me] = __expectString(data[_Me]);
    }
    const exception = new CidrCollectionAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_CidrCollectionInUseExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_Me] != null) {
        contents[_Me] = __expectString(data[_Me]);
    }
    const exception = new CidrCollectionInUseException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_CidrCollectionVersionMismatchExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_Me] != null) {
        contents[_Me] = __expectString(data[_Me]);
    }
    const exception = new CidrCollectionVersionMismatchException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_ConcurrentModificationRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new ConcurrentModification({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_ConflictingDomainExistsRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new ConflictingDomainExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_ConflictingTypesRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new ConflictingTypes({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_DelegationSetAlreadyCreatedRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new DelegationSetAlreadyCreated({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_DelegationSetAlreadyReusableRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new DelegationSetAlreadyReusable({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_DelegationSetInUseRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new DelegationSetInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_DelegationSetNotAvailableRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new DelegationSetNotAvailable({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_DelegationSetNotReusableRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new DelegationSetNotReusable({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_DNSSECNotFoundRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new DNSSECNotFound({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_HealthCheckAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new HealthCheckAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_HealthCheckInUseRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new HealthCheckInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_HealthCheckVersionMismatchRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new HealthCheckVersionMismatch({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_HostedZoneAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new HostedZoneAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_HostedZoneNotEmptyRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new HostedZoneNotEmpty({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_HostedZoneNotFoundRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new HostedZoneNotFound({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_HostedZoneNotPrivateRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new HostedZoneNotPrivate({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_HostedZonePartiallyDelegatedRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new HostedZonePartiallyDelegated({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_IncompatibleVersionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new IncompatibleVersion({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_InsufficientCloudWatchLogsResourcePolicyRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new InsufficientCloudWatchLogsResourcePolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_InvalidArgumentRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new InvalidArgument({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_InvalidChangeBatchRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    if (data.messages === "") {
        contents[_mess] = [];
    }
    else if (data[_mess] != null && data[_mess][_Me] != null) {
        contents[_mess] = de_ErrorMessages(__getArrayIfSingleItem(data[_mess][_Me]), context);
    }
    const exception = new InvalidChangeBatch({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_InvalidDomainNameRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new InvalidDomainName({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_InvalidInputRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new InvalidInput({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_InvalidKeySigningKeyNameRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new InvalidKeySigningKeyName({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_InvalidKeySigningKeyStatusRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new InvalidKeySigningKeyStatus({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_InvalidKMSArnRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new InvalidKMSArn({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_InvalidPaginationTokenRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new InvalidPaginationToken({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_InvalidSigningStatusRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new InvalidSigningStatus({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_InvalidTrafficPolicyDocumentRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new InvalidTrafficPolicyDocument({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_InvalidVPCIdRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new InvalidVPCId({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_KeySigningKeyAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new KeySigningKeyAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_KeySigningKeyInParentDSRecordRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new KeySigningKeyInParentDSRecord({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_KeySigningKeyInUseRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new KeySigningKeyInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_KeySigningKeyWithActiveStatusNotFoundRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new KeySigningKeyWithActiveStatusNotFound({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_LastVPCAssociationRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new LastVPCAssociation({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_LimitsExceededRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new LimitsExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_NoSuchChangeRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new NoSuchChange({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_NoSuchCidrCollectionExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_Me] != null) {
        contents[_Me] = __expectString(data[_Me]);
    }
    const exception = new NoSuchCidrCollectionException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_NoSuchCidrLocationExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_Me] != null) {
        contents[_Me] = __expectString(data[_Me]);
    }
    const exception = new NoSuchCidrLocationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_NoSuchCloudWatchLogsLogGroupRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new NoSuchCloudWatchLogsLogGroup({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_NoSuchDelegationSetRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new NoSuchDelegationSet({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_NoSuchGeoLocationRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new NoSuchGeoLocation({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_NoSuchHealthCheckRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new NoSuchHealthCheck({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_NoSuchHostedZoneRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new NoSuchHostedZone({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_NoSuchKeySigningKeyRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new NoSuchKeySigningKey({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_NoSuchQueryLoggingConfigRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new NoSuchQueryLoggingConfig({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_NoSuchTrafficPolicyRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new NoSuchTrafficPolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_NoSuchTrafficPolicyInstanceRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new NoSuchTrafficPolicyInstance({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_NotAuthorizedExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new NotAuthorizedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_PriorRequestNotCompleteRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new PriorRequestNotComplete({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_PublicZoneVPCAssociationRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new PublicZoneVPCAssociation({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_QueryLoggingConfigAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new QueryLoggingConfigAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_ThrottlingExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new ThrottlingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_TooManyHealthChecksRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new TooManyHealthChecks({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_TooManyHostedZonesRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new TooManyHostedZones({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_TooManyKeySigningKeysRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new TooManyKeySigningKeys({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_TooManyTrafficPoliciesRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new TooManyTrafficPolicies({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_TooManyTrafficPolicyInstancesRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new TooManyTrafficPolicyInstances({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_TooManyTrafficPolicyVersionsForCurrentPolicyRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new TooManyTrafficPolicyVersionsForCurrentPolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_TooManyVPCAssociationAuthorizationsRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new TooManyVPCAssociationAuthorizations({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_TrafficPolicyAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new TrafficPolicyAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_TrafficPolicyInstanceAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new TrafficPolicyInstanceAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_TrafficPolicyInUseRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new TrafficPolicyInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_VPCAssociationAuthorizationNotFoundRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new VPCAssociationAuthorizationNotFound({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const de_VPCAssociationNotFoundRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body.Error;
    if (data[_mes] != null) {
        contents[_mes] = __expectString(data[_mes]);
    }
    const exception = new VPCAssociationNotFound({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body.Error);
};
const se_AlarmIdentifier = (input, context) => {
    const bn = new __XmlNode(_AI);
    if (input[_Re] != null) {
        bn.c(__XmlNode.of(_CWR, input[_Re]).n(_Re));
    }
    if (input[_N] != null) {
        bn.c(__XmlNode.of(_AN, input[_N]).n(_N));
    }
    return bn;
};
const se_AliasTarget = (input, context) => {
    const bn = new __XmlNode(_ATl);
    if (input[_HZI] != null) {
        bn.c(__XmlNode.of(_RI, input[_HZI]).n(_HZI));
    }
    bn.cc(input, _DNSN);
    if (input[_ETH] != null) {
        bn.c(__XmlNode.of(_AHE, String(input[_ETH])).n(_ETH));
    }
    return bn;
};
const se_Change = (input, context) => {
    const bn = new __XmlNode(_Cha);
    if (input[_A] != null) {
        bn.c(__XmlNode.of(_CA, input[_A]).n(_A));
    }
    if (input[_RRSe] != null) {
        bn.c(se_ResourceRecordSet(input[_RRSe], context).n(_RRSe));
    }
    return bn;
};
const se_ChangeBatch = (input, context) => {
    const bn = new __XmlNode(_CB);
    if (input[_C] != null) {
        bn.c(__XmlNode.of(_RD, input[_C]).n(_C));
    }
    bn.lc(input, "Changes", "Changes", () => se_Changes(input[_Ch], context));
    return bn;
};
const se_Changes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_Change(entry, context);
        return n.n(_Cha);
    });
};
const se_ChildHealthCheckList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = __XmlNode.of(_HCI, entry);
        return n.n(_CHCh);
    });
};
const se_CidrCollectionChange = (input, context) => {
    const bn = new __XmlNode(_CCC);
    if (input[_LN] != null) {
        bn.c(__XmlNode.of(_CLNDNA, input[_LN]).n(_LN));
    }
    if (input[_A] != null) {
        bn.c(__XmlNode.of(_CCCA, input[_A]).n(_A));
    }
    bn.lc(input, "CidrList", "CidrList", () => se_CidrList(input[_CLi], context));
    return bn;
};
const se_CidrCollectionChanges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_CidrCollectionChange(entry, context);
        return n.n(_me);
    });
};
const se_CidrList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = __XmlNode.of(_Ci, entry);
        return n.n(_Ci);
    });
};
const se_CidrRoutingConfig = (input, context) => {
    const bn = new __XmlNode(_CRC);
    if (input[_CIo] != null) {
        bn.c(__XmlNode.of(_UUID, input[_CIo]).n(_CIo));
    }
    if (input[_LN] != null) {
        bn.c(__XmlNode.of(_CLNDA, input[_LN]).n(_LN));
    }
    return bn;
};
const se_Coordinates = (input, context) => {
    const bn = new __XmlNode(_Coo);
    bn.cc(input, _La);
    bn.cc(input, _Lo);
    return bn;
};
const se_GeoLocation = (input, context) => {
    const bn = new __XmlNode(_GL);
    if (input[_CC] != null) {
        bn.c(__XmlNode.of(_GLCC, input[_CC]).n(_CC));
    }
    if (input[_CCo] != null) {
        bn.c(__XmlNode.of(_GLCCe, input[_CCo]).n(_CCo));
    }
    if (input[_SC] != null) {
        bn.c(__XmlNode.of(_GLSC, input[_SC]).n(_SC));
    }
    return bn;
};
const se_GeoProximityLocation = (input, context) => {
    const bn = new __XmlNode(_GPL);
    bn.cc(input, _AWSR);
    bn.cc(input, _LZG);
    if (input[_Coo] != null) {
        bn.c(se_Coordinates(input[_Coo], context).n(_Coo));
    }
    if (input[_B] != null) {
        bn.c(__XmlNode.of(_B, String(input[_B])).n(_B));
    }
    return bn;
};
const se_HealthCheckConfig = (input, context) => {
    const bn = new __XmlNode(_HCC);
    bn.cc(input, _IPA);
    if (input[_P] != null) {
        bn.c(__XmlNode.of(_P, String(input[_P])).n(_P));
    }
    if (input[_T] != null) {
        bn.c(__XmlNode.of(_HCT, input[_T]).n(_T));
    }
    bn.cc(input, _RP);
    bn.cc(input, _FQDN);
    bn.cc(input, _SS);
    if (input[_RIeq] != null) {
        bn.c(__XmlNode.of(_RIeq, String(input[_RIeq])).n(_RIeq));
    }
    if (input[_FT] != null) {
        bn.c(__XmlNode.of(_FT, String(input[_FT])).n(_FT));
    }
    if (input[_ML] != null) {
        bn.c(__XmlNode.of(_ML, String(input[_ML])).n(_ML));
    }
    if (input[_I] != null) {
        bn.c(__XmlNode.of(_I, String(input[_I])).n(_I));
    }
    if (input[_Di] != null) {
        bn.c(__XmlNode.of(_Di, String(input[_Di])).n(_Di));
    }
    if (input[_HT] != null) {
        bn.c(__XmlNode.of(_HT, String(input[_HT])).n(_HT));
    }
    bn.lc(input, "ChildHealthChecks", "ChildHealthChecks", () => se_ChildHealthCheckList(input[_CHC], context));
    if (input[_ESNI] != null) {
        bn.c(__XmlNode.of(_ESNI, String(input[_ESNI])).n(_ESNI));
    }
    bn.lc(input, "Regions", "Regions", () => se_HealthCheckRegionList(input[_R], context));
    if (input[_AI] != null) {
        bn.c(se_AlarmIdentifier(input[_AI], context).n(_AI));
    }
    bn.cc(input, _IDHS);
    bn.cc(input, _RCA);
    return bn;
};
const se_HealthCheckRegionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = __XmlNode.of(_HCR, entry);
        return n.n(_Re);
    });
};
const se_HostedZoneConfig = (input, context) => {
    const bn = new __XmlNode(_HZC);
    if (input[_C] != null) {
        bn.c(__XmlNode.of(_RD, input[_C]).n(_C));
    }
    if (input[_PZ] != null) {
        bn.c(__XmlNode.of(_IPZ, String(input[_PZ])).n(_PZ));
    }
    return bn;
};
const se_ResettableElementNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = __XmlNode.of(_REN, entry);
        return n.n(_REN);
    });
};
const se_ResourceRecord = (input, context) => {
    const bn = new __XmlNode(_RR);
    if (input[_V] != null) {
        bn.c(__XmlNode.of(_RDa, input[_V]).n(_V));
    }
    return bn;
};
const se_ResourceRecords = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_ResourceRecord(entry, context);
        return n.n(_RR);
    });
};
const se_ResourceRecordSet = (input, context) => {
    const bn = new __XmlNode(_RRSe);
    if (input[_N] != null) {
        bn.c(__XmlNode.of(_DNSN, input[_N]).n(_N));
    }
    if (input[_T] != null) {
        bn.c(__XmlNode.of(_RRT, input[_T]).n(_T));
    }
    if (input[_SI] != null) {
        bn.c(__XmlNode.of(_RRSI, input[_SI]).n(_SI));
    }
    if (input[_W] != null) {
        bn.c(__XmlNode.of(_RRSW, String(input[_W])).n(_W));
    }
    if (input[_Re] != null) {
        bn.c(__XmlNode.of(_RRSR, input[_Re]).n(_Re));
    }
    if (input[_GL] != null) {
        bn.c(se_GeoLocation(input[_GL], context).n(_GL));
    }
    if (input[_F] != null) {
        bn.c(__XmlNode.of(_RRSF, input[_F]).n(_F));
    }
    if (input[_MVA] != null) {
        bn.c(__XmlNode.of(_RRSMVA, String(input[_MVA])).n(_MVA));
    }
    if (input[_TTL] != null) {
        bn.c(__XmlNode.of(_TTL, String(input[_TTL])).n(_TTL));
    }
    bn.lc(input, "ResourceRecords", "ResourceRecords", () => se_ResourceRecords(input[_RRe], context));
    if (input[_ATl] != null) {
        bn.c(se_AliasTarget(input[_ATl], context).n(_ATl));
    }
    bn.cc(input, _HCI);
    bn.cc(input, _TPII);
    if (input[_CRC] != null) {
        bn.c(se_CidrRoutingConfig(input[_CRC], context).n(_CRC));
    }
    if (input[_GPL] != null) {
        bn.c(se_GeoProximityLocation(input[_GPL], context).n(_GPL));
    }
    return bn;
};
const se_Tag = (input, context) => {
    const bn = new __XmlNode(_Ta);
    if (input[_K] != null) {
        bn.c(__XmlNode.of(_TK, input[_K]).n(_K));
    }
    if (input[_V] != null) {
        bn.c(__XmlNode.of(_TV, input[_V]).n(_V));
    }
    return bn;
};
const se_TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = __XmlNode.of(_TK, entry);
        return n.n(_K);
    });
};
const se_TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = se_Tag(entry, context);
        return n.n(_Ta);
    });
};
const se_TagResourceIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const n = __XmlNode.of(_TRI, entry);
        return n.n(_RI);
    });
};
const se_VPC = (input, context) => {
    const bn = new __XmlNode(_VPC);
    bn.cc(input, _VPCR);
    bn.cc(input, _VPCI);
    return bn;
};
const de_AccountLimit = (output, context) => {
    const contents = {};
    if (output[_T] != null) {
        contents[_T] = __expectString(output[_T]);
    }
    if (output[_V] != null) {
        contents[_V] = __strictParseLong(output[_V]);
    }
    return contents;
};
const de_AlarmIdentifier = (output, context) => {
    const contents = {};
    if (output[_Re] != null) {
        contents[_Re] = __expectString(output[_Re]);
    }
    if (output[_N] != null) {
        contents[_N] = __expectString(output[_N]);
    }
    return contents;
};
const de_AliasTarget = (output, context) => {
    const contents = {};
    if (output[_HZI] != null) {
        contents[_HZI] = __expectString(output[_HZI]);
    }
    if (output[_DNSN] != null) {
        contents[_DNSN] = __expectString(output[_DNSN]);
    }
    if (output[_ETH] != null) {
        contents[_ETH] = __parseBoolean(output[_ETH]);
    }
    return contents;
};
const de_ChangeInfo = (output, context) => {
    const contents = {};
    if (output[_Id] != null) {
        contents[_Id] = __expectString(output[_Id]);
    }
    if (output[_S] != null) {
        contents[_S] = __expectString(output[_S]);
    }
    if (output[_SA] != null) {
        contents[_SA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SA]));
    }
    if (output[_C] != null) {
        contents[_C] = __expectString(output[_C]);
    }
    return contents;
};
const de_CheckerIpRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_ChildHealthCheckList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_CidrBlockSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_CidrBlockSummary(entry, context);
    });
};
const de_CidrBlockSummary = (output, context) => {
    const contents = {};
    if (output[_CBid] != null) {
        contents[_CBid] = __expectString(output[_CBid]);
    }
    if (output[_LN] != null) {
        contents[_LN] = __expectString(output[_LN]);
    }
    return contents;
};
const de_CidrCollection = (output, context) => {
    const contents = {};
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    if (output[_Id] != null) {
        contents[_Id] = __expectString(output[_Id]);
    }
    if (output[_N] != null) {
        contents[_N] = __expectString(output[_N]);
    }
    if (output[_Ve] != null) {
        contents[_Ve] = __strictParseLong(output[_Ve]);
    }
    return contents;
};
const de_CidrRoutingConfig = (output, context) => {
    const contents = {};
    if (output[_CIo] != null) {
        contents[_CIo] = __expectString(output[_CIo]);
    }
    if (output[_LN] != null) {
        contents[_LN] = __expectString(output[_LN]);
    }
    return contents;
};
const de_CloudWatchAlarmConfiguration = (output, context) => {
    const contents = {};
    if (output[_EP] != null) {
        contents[_EP] = __strictParseInt32(output[_EP]);
    }
    if (output[_Th] != null) {
        contents[_Th] = __strictParseFloat(output[_Th]);
    }
    if (output[_CO] != null) {
        contents[_CO] = __expectString(output[_CO]);
    }
    if (output[_Pe] != null) {
        contents[_Pe] = __strictParseInt32(output[_Pe]);
    }
    if (output[_MN] != null) {
        contents[_MN] = __expectString(output[_MN]);
    }
    if (output[_Nam] != null) {
        contents[_Nam] = __expectString(output[_Nam]);
    }
    if (output[_St] != null) {
        contents[_St] = __expectString(output[_St]);
    }
    if (output.Dimensions === "") {
        contents[_Dim] = [];
    }
    else if (output[_Dim] != null && output[_Dim][_Dime] != null) {
        contents[_Dim] = de_DimensionList(__getArrayIfSingleItem(output[_Dim][_Dime]), context);
    }
    return contents;
};
const de_CollectionSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_CollectionSummary(entry, context);
    });
};
const de_CollectionSummary = (output, context) => {
    const contents = {};
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    if (output[_Id] != null) {
        contents[_Id] = __expectString(output[_Id]);
    }
    if (output[_N] != null) {
        contents[_N] = __expectString(output[_N]);
    }
    if (output[_Ve] != null) {
        contents[_Ve] = __strictParseLong(output[_Ve]);
    }
    return contents;
};
const de_Coordinates = (output, context) => {
    const contents = {};
    if (output[_La] != null) {
        contents[_La] = __expectString(output[_La]);
    }
    if (output[_Lo] != null) {
        contents[_Lo] = __expectString(output[_Lo]);
    }
    return contents;
};
const de_DelegationSet = (output, context) => {
    const contents = {};
    if (output[_Id] != null) {
        contents[_Id] = __expectString(output[_Id]);
    }
    if (output[_CR] != null) {
        contents[_CR] = __expectString(output[_CR]);
    }
    if (output.NameServers === "") {
        contents[_NS] = [];
    }
    else if (output[_NS] != null && output[_NS][_NSa] != null) {
        contents[_NS] = de_DelegationSetNameServers(__getArrayIfSingleItem(output[_NS][_NSa]), context);
    }
    return contents;
};
const de_DelegationSetNameServers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_DelegationSets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_DelegationSet(entry, context);
    });
};
const de_Dimension = (output, context) => {
    const contents = {};
    if (output[_N] != null) {
        contents[_N] = __expectString(output[_N]);
    }
    if (output[_V] != null) {
        contents[_V] = __expectString(output[_V]);
    }
    return contents;
};
const de_DimensionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Dimension(entry, context);
    });
};
const de_DNSSECStatus = (output, context) => {
    const contents = {};
    if (output[_SSe] != null) {
        contents[_SSe] = __expectString(output[_SSe]);
    }
    if (output[_SM] != null) {
        contents[_SM] = __expectString(output[_SM]);
    }
    return contents;
};
const de_ErrorMessages = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_GeoLocation = (output, context) => {
    const contents = {};
    if (output[_CC] != null) {
        contents[_CC] = __expectString(output[_CC]);
    }
    if (output[_CCo] != null) {
        contents[_CCo] = __expectString(output[_CCo]);
    }
    if (output[_SC] != null) {
        contents[_SC] = __expectString(output[_SC]);
    }
    return contents;
};
const de_GeoLocationDetails = (output, context) => {
    const contents = {};
    if (output[_CC] != null) {
        contents[_CC] = __expectString(output[_CC]);
    }
    if (output[_CNon] != null) {
        contents[_CNon] = __expectString(output[_CNon]);
    }
    if (output[_CCo] != null) {
        contents[_CCo] = __expectString(output[_CCo]);
    }
    if (output[_CNou] != null) {
        contents[_CNou] = __expectString(output[_CNou]);
    }
    if (output[_SC] != null) {
        contents[_SC] = __expectString(output[_SC]);
    }
    if (output[_SN] != null) {
        contents[_SN] = __expectString(output[_SN]);
    }
    return contents;
};
const de_GeoLocationDetailsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_GeoLocationDetails(entry, context);
    });
};
const de_GeoProximityLocation = (output, context) => {
    const contents = {};
    if (output[_AWSR] != null) {
        contents[_AWSR] = __expectString(output[_AWSR]);
    }
    if (output[_LZG] != null) {
        contents[_LZG] = __expectString(output[_LZG]);
    }
    if (output[_Coo] != null) {
        contents[_Coo] = de_Coordinates(output[_Coo], context);
    }
    if (output[_B] != null) {
        contents[_B] = __strictParseInt32(output[_B]);
    }
    return contents;
};
const de_HealthCheck = (output, context) => {
    const contents = {};
    if (output[_Id] != null) {
        contents[_Id] = __expectString(output[_Id]);
    }
    if (output[_CR] != null) {
        contents[_CR] = __expectString(output[_CR]);
    }
    if (output[_LS] != null) {
        contents[_LS] = de_LinkedService(output[_LS], context);
    }
    if (output[_HCC] != null) {
        contents[_HCC] = de_HealthCheckConfig(output[_HCC], context);
    }
    if (output[_HCV] != null) {
        contents[_HCV] = __strictParseLong(output[_HCV]);
    }
    if (output[_CWAC] != null) {
        contents[_CWAC] = de_CloudWatchAlarmConfiguration(output[_CWAC], context);
    }
    return contents;
};
const de_HealthCheckConfig = (output, context) => {
    const contents = {};
    if (output[_IPA] != null) {
        contents[_IPA] = __expectString(output[_IPA]);
    }
    if (output[_P] != null) {
        contents[_P] = __strictParseInt32(output[_P]);
    }
    if (output[_T] != null) {
        contents[_T] = __expectString(output[_T]);
    }
    if (output[_RP] != null) {
        contents[_RP] = __expectString(output[_RP]);
    }
    if (output[_FQDN] != null) {
        contents[_FQDN] = __expectString(output[_FQDN]);
    }
    if (output[_SS] != null) {
        contents[_SS] = __expectString(output[_SS]);
    }
    if (output[_RIeq] != null) {
        contents[_RIeq] = __strictParseInt32(output[_RIeq]);
    }
    if (output[_FT] != null) {
        contents[_FT] = __strictParseInt32(output[_FT]);
    }
    if (output[_ML] != null) {
        contents[_ML] = __parseBoolean(output[_ML]);
    }
    if (output[_I] != null) {
        contents[_I] = __parseBoolean(output[_I]);
    }
    if (output[_Di] != null) {
        contents[_Di] = __parseBoolean(output[_Di]);
    }
    if (output[_HT] != null) {
        contents[_HT] = __strictParseInt32(output[_HT]);
    }
    if (output.ChildHealthChecks === "") {
        contents[_CHC] = [];
    }
    else if (output[_CHC] != null && output[_CHC][_CHCh] != null) {
        contents[_CHC] = de_ChildHealthCheckList(__getArrayIfSingleItem(output[_CHC][_CHCh]), context);
    }
    if (output[_ESNI] != null) {
        contents[_ESNI] = __parseBoolean(output[_ESNI]);
    }
    if (output.Regions === "") {
        contents[_R] = [];
    }
    else if (output[_R] != null && output[_R][_Re] != null) {
        contents[_R] = de_HealthCheckRegionList(__getArrayIfSingleItem(output[_R][_Re]), context);
    }
    if (output[_AI] != null) {
        contents[_AI] = de_AlarmIdentifier(output[_AI], context);
    }
    if (output[_IDHS] != null) {
        contents[_IDHS] = __expectString(output[_IDHS]);
    }
    if (output[_RCA] != null) {
        contents[_RCA] = __expectString(output[_RCA]);
    }
    return contents;
};
const de_HealthCheckObservation = (output, context) => {
    const contents = {};
    if (output[_Re] != null) {
        contents[_Re] = __expectString(output[_Re]);
    }
    if (output[_IPA] != null) {
        contents[_IPA] = __expectString(output[_IPA]);
    }
    if (output[_SR] != null) {
        contents[_SR] = de_StatusReport(output[_SR], context);
    }
    return contents;
};
const de_HealthCheckObservations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_HealthCheckObservation(entry, context);
    });
};
const de_HealthCheckRegionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_HealthChecks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_HealthCheck(entry, context);
    });
};
const de_HostedZone = (output, context) => {
    const contents = {};
    if (output[_Id] != null) {
        contents[_Id] = __expectString(output[_Id]);
    }
    if (output[_N] != null) {
        contents[_N] = __expectString(output[_N]);
    }
    if (output[_CR] != null) {
        contents[_CR] = __expectString(output[_CR]);
    }
    if (output[_Con] != null) {
        contents[_Con] = de_HostedZoneConfig(output[_Con], context);
    }
    if (output[_RRSC] != null) {
        contents[_RRSC] = __strictParseLong(output[_RRSC]);
    }
    if (output[_LS] != null) {
        contents[_LS] = de_LinkedService(output[_LS], context);
    }
    return contents;
};
const de_HostedZoneConfig = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = __expectString(output[_C]);
    }
    if (output[_PZ] != null) {
        contents[_PZ] = __parseBoolean(output[_PZ]);
    }
    return contents;
};
const de_HostedZoneLimit = (output, context) => {
    const contents = {};
    if (output[_T] != null) {
        contents[_T] = __expectString(output[_T]);
    }
    if (output[_V] != null) {
        contents[_V] = __strictParseLong(output[_V]);
    }
    return contents;
};
const de_HostedZoneOwner = (output, context) => {
    const contents = {};
    if (output[_OA] != null) {
        contents[_OA] = __expectString(output[_OA]);
    }
    if (output[_OS] != null) {
        contents[_OS] = __expectString(output[_OS]);
    }
    return contents;
};
const de_HostedZones = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_HostedZone(entry, context);
    });
};
const de_HostedZoneSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_HostedZoneSummary(entry, context);
    });
};
const de_HostedZoneSummary = (output, context) => {
    const contents = {};
    if (output[_HZI] != null) {
        contents[_HZI] = __expectString(output[_HZI]);
    }
    if (output[_N] != null) {
        contents[_N] = __expectString(output[_N]);
    }
    if (output[_O] != null) {
        contents[_O] = de_HostedZoneOwner(output[_O], context);
    }
    return contents;
};
const de_KeySigningKey = (output, context) => {
    const contents = {};
    if (output[_N] != null) {
        contents[_N] = __expectString(output[_N]);
    }
    if (output[_KA] != null) {
        contents[_KA] = __expectString(output[_KA]);
    }
    if (output[_Fl] != null) {
        contents[_Fl] = __strictParseInt32(output[_Fl]);
    }
    if (output[_SAM] != null) {
        contents[_SAM] = __expectString(output[_SAM]);
    }
    if (output[_SAT] != null) {
        contents[_SAT] = __strictParseInt32(output[_SAT]);
    }
    if (output[_DAM] != null) {
        contents[_DAM] = __expectString(output[_DAM]);
    }
    if (output[_DAT] != null) {
        contents[_DAT] = __strictParseInt32(output[_DAT]);
    }
    if (output[_KT] != null) {
        contents[_KT] = __strictParseInt32(output[_KT]);
    }
    if (output[_DV] != null) {
        contents[_DV] = __expectString(output[_DV]);
    }
    if (output[_PK] != null) {
        contents[_PK] = __expectString(output[_PK]);
    }
    if (output[_DSR] != null) {
        contents[_DSR] = __expectString(output[_DSR]);
    }
    if (output[_DNSKEYR] != null) {
        contents[_DNSKEYR] = __expectString(output[_DNSKEYR]);
    }
    if (output[_S] != null) {
        contents[_S] = __expectString(output[_S]);
    }
    if (output[_SM] != null) {
        contents[_SM] = __expectString(output[_SM]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    if (output[_LMD] != null) {
        contents[_LMD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMD]));
    }
    return contents;
};
const de_KeySigningKeys = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_KeySigningKey(entry, context);
    });
};
const de_LinkedService = (output, context) => {
    const contents = {};
    if (output[_SP] != null) {
        contents[_SP] = __expectString(output[_SP]);
    }
    if (output[_De] != null) {
        contents[_De] = __expectString(output[_De]);
    }
    return contents;
};
const de_LocationSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_LocationSummary(entry, context);
    });
};
const de_LocationSummary = (output, context) => {
    const contents = {};
    if (output[_LN] != null) {
        contents[_LN] = __expectString(output[_LN]);
    }
    return contents;
};
const de_QueryLoggingConfig = (output, context) => {
    const contents = {};
    if (output[_Id] != null) {
        contents[_Id] = __expectString(output[_Id]);
    }
    if (output[_HZI] != null) {
        contents[_HZI] = __expectString(output[_HZI]);
    }
    if (output[_CWLLGA] != null) {
        contents[_CWLLGA] = __expectString(output[_CWLLGA]);
    }
    return contents;
};
const de_QueryLoggingConfigs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_QueryLoggingConfig(entry, context);
    });
};
const de_RecordData = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_ResourceRecord = (output, context) => {
    const contents = {};
    if (output[_V] != null) {
        contents[_V] = __expectString(output[_V]);
    }
    return contents;
};
const de_ResourceRecords = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ResourceRecord(entry, context);
    });
};
const de_ResourceRecordSet = (output, context) => {
    const contents = {};
    if (output[_N] != null) {
        contents[_N] = __expectString(output[_N]);
    }
    if (output[_T] != null) {
        contents[_T] = __expectString(output[_T]);
    }
    if (output[_SI] != null) {
        contents[_SI] = __expectString(output[_SI]);
    }
    if (output[_W] != null) {
        contents[_W] = __strictParseLong(output[_W]);
    }
    if (output[_Re] != null) {
        contents[_Re] = __expectString(output[_Re]);
    }
    if (output[_GL] != null) {
        contents[_GL] = de_GeoLocation(output[_GL], context);
    }
    if (output[_F] != null) {
        contents[_F] = __expectString(output[_F]);
    }
    if (output[_MVA] != null) {
        contents[_MVA] = __parseBoolean(output[_MVA]);
    }
    if (output[_TTL] != null) {
        contents[_TTL] = __strictParseLong(output[_TTL]);
    }
    if (output.ResourceRecords === "") {
        contents[_RRe] = [];
    }
    else if (output[_RRe] != null && output[_RRe][_RR] != null) {
        contents[_RRe] = de_ResourceRecords(__getArrayIfSingleItem(output[_RRe][_RR]), context);
    }
    if (output[_ATl] != null) {
        contents[_ATl] = de_AliasTarget(output[_ATl], context);
    }
    if (output[_HCI] != null) {
        contents[_HCI] = __expectString(output[_HCI]);
    }
    if (output[_TPII] != null) {
        contents[_TPII] = __expectString(output[_TPII]);
    }
    if (output[_CRC] != null) {
        contents[_CRC] = de_CidrRoutingConfig(output[_CRC], context);
    }
    if (output[_GPL] != null) {
        contents[_GPL] = de_GeoProximityLocation(output[_GPL], context);
    }
    return contents;
};
const de_ResourceRecordSets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ResourceRecordSet(entry, context);
    });
};
const de_ResourceTagSet = (output, context) => {
    const contents = {};
    if (output[_RTe] != null) {
        contents[_RTe] = __expectString(output[_RTe]);
    }
    if (output[_RI] != null) {
        contents[_RI] = __expectString(output[_RI]);
    }
    if (output.Tags === "") {
        contents[_Tag] = [];
    }
    else if (output[_Tag] != null && output[_Tag][_Ta] != null) {
        contents[_Tag] = de_TagList(__getArrayIfSingleItem(output[_Tag][_Ta]), context);
    }
    return contents;
};
const de_ResourceTagSetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ResourceTagSet(entry, context);
    });
};
const de_ReusableDelegationSetLimit = (output, context) => {
    const contents = {};
    if (output[_T] != null) {
        contents[_T] = __expectString(output[_T]);
    }
    if (output[_V] != null) {
        contents[_V] = __strictParseLong(output[_V]);
    }
    return contents;
};
const de_StatusReport = (output, context) => {
    const contents = {};
    if (output[_S] != null) {
        contents[_S] = __expectString(output[_S]);
    }
    if (output[_CT] != null) {
        contents[_CT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CT]));
    }
    return contents;
};
const de_Tag = (output, context) => {
    const contents = {};
    if (output[_K] != null) {
        contents[_K] = __expectString(output[_K]);
    }
    if (output[_V] != null) {
        contents[_V] = __expectString(output[_V]);
    }
    return contents;
};
const de_TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Tag(entry, context);
    });
};
const de_TrafficPolicies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_TrafficPolicy(entry, context);
    });
};
const de_TrafficPolicy = (output, context) => {
    const contents = {};
    if (output[_Id] != null) {
        contents[_Id] = __expectString(output[_Id]);
    }
    if (output[_Ve] != null) {
        contents[_Ve] = __strictParseInt32(output[_Ve]);
    }
    if (output[_N] != null) {
        contents[_N] = __expectString(output[_N]);
    }
    if (output[_T] != null) {
        contents[_T] = __expectString(output[_T]);
    }
    if (output[_D] != null) {
        contents[_D] = __expectString(output[_D]);
    }
    if (output[_C] != null) {
        contents[_C] = __expectString(output[_C]);
    }
    return contents;
};
const de_TrafficPolicyInstance = (output, context) => {
    const contents = {};
    if (output[_Id] != null) {
        contents[_Id] = __expectString(output[_Id]);
    }
    if (output[_HZI] != null) {
        contents[_HZI] = __expectString(output[_HZI]);
    }
    if (output[_N] != null) {
        contents[_N] = __expectString(output[_N]);
    }
    if (output[_TTL] != null) {
        contents[_TTL] = __strictParseLong(output[_TTL]);
    }
    if (output[_Sta] != null) {
        contents[_Sta] = __expectString(output[_Sta]);
    }
    if (output[_Me] != null) {
        contents[_Me] = __expectString(output[_Me]);
    }
    if (output[_TPI] != null) {
        contents[_TPI] = __expectString(output[_TPI]);
    }
    if (output[_TPV] != null) {
        contents[_TPV] = __strictParseInt32(output[_TPV]);
    }
    if (output[_TPT] != null) {
        contents[_TPT] = __expectString(output[_TPT]);
    }
    return contents;
};
const de_TrafficPolicyInstances = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_TrafficPolicyInstance(entry, context);
    });
};
const de_TrafficPolicySummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_TrafficPolicySummary(entry, context);
    });
};
const de_TrafficPolicySummary = (output, context) => {
    const contents = {};
    if (output[_Id] != null) {
        contents[_Id] = __expectString(output[_Id]);
    }
    if (output[_N] != null) {
        contents[_N] = __expectString(output[_N]);
    }
    if (output[_T] != null) {
        contents[_T] = __expectString(output[_T]);
    }
    if (output[_LV] != null) {
        contents[_LV] = __strictParseInt32(output[_LV]);
    }
    if (output[_TPCr] != null) {
        contents[_TPCr] = __strictParseInt32(output[_TPCr]);
    }
    return contents;
};
const de_VPC = (output, context) => {
    const contents = {};
    if (output[_VPCR] != null) {
        contents[_VPCR] = __expectString(output[_VPCR]);
    }
    if (output[_VPCI] != null) {
        contents[_VPCI] = __expectString(output[_VPCI]);
    }
    return contents;
};
const de_VPCs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_VPC(entry, context);
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const _A = "Action";
const _AHE = "AliasHealthEnabled";
const _AI = "AlarmIdentifier";
const _AN = "AlarmName";
const _AT = "AddTags";
const _ATl = "AliasTarget";
const _AVPCC = "AssociateVPCComment";
const _AVPCWHZR = "AssociateVPCWithHostedZoneRequest";
const _AWSR = "AWSRegion";
const _Ar = "Arn";
const _B = "Bias";
const _C = "Comment";
const _CA = "ChangeAction";
const _CB = "ChangeBatch";
const _CBi = "CidrBlocks";
const _CBid = "CidrBlock";
const _CC = "ContinentCode";
const _CCC = "CidrCollectionChange";
const _CCCA = "CidrCollectionChangeAction";
const _CCCR = "ChangeCidrCollectionRequest";
const _CCCRr = "CreateCidrCollectionRequest";
const _CCi = "CidrCollections";
const _CCo = "CountryCode";
const _CD = "CreatedDate";
const _CHC = "ChildHealthChecks";
const _CHCR = "CreateHealthCheckRequest";
const _CHCh = "ChildHealthCheck";
const _CHZR = "CreateHostedZoneRequest";
const _CI = "ChangeInfo";
const _CIR = "CheckerIpRanges";
const _CIo = "CollectionId";
const _CKSKR = "CreateKeySigningKeyRequest";
const _CL = "CidrLocations";
const _CLNDA = "CidrLocationNameDefaultAllowed";
const _CLNDNA = "CidrLocationNameDefaultNotAllowed";
const _CLi = "CidrList";
const _CN = "CidrNonce";
const _CNo = "CollectionName";
const _CNon = "ContinentName";
const _CNou = "CountryName";
const _CO = "ComparisonOperator";
const _CQLCR = "CreateQueryLoggingConfigRequest";
const _CR = "CallerReference";
const _CRC = "CidrRoutingConfig";
const _CRDSR = "CreateReusableDelegationSetRequest";
const _CRRSR = "ChangeResourceRecordSetsRequest";
const _CT = "CheckedTime";
const _CTFRR = "ChangeTagsForResourceRequest";
const _CTPIR = "CreateTrafficPolicyInstanceRequest";
const _CTPR = "CreateTrafficPolicyRequest";
const _CTPVR = "CreateTrafficPolicyVersionRequest";
const _CV = "CollectionVersion";
const _CVPCAAR = "CreateVPCAssociationAuthorizationRequest";
const _CWAC = "CloudWatchAlarmConfiguration";
const _CWLLGA = "CloudWatchLogsLogGroupArn";
const _CWR = "CloudWatchRegion";
const _Ch = "Changes";
const _Cha = "Change";
const _Ci = "Cidr";
const _Co = "Collection";
const _Con = "Config";
const _Coo = "Coordinates";
const _Cou = "Count";
const _D = "Document";
const _DAM = "DigestAlgorithmMnemonic";
const _DAT = "DigestAlgorithmType";
const _DNSKEYR = "DNSKEYRecord";
const _DNSN = "DNSName";
const _DS = "DelegationSet";
const _DSI = "DelegationSetId";
const _DSR = "DSRecord";
const _DSe = "DelegationSets";
const _DV = "DigestValue";
const _DVPCAAR = "DeleteVPCAssociationAuthorizationRequest";
const _DVPCC = "DisassociateVPCComment";
const _DVPCFHZR = "DisassociateVPCFromHostedZoneRequest";
const _De = "Description";
const _Di = "Disabled";
const _Dim = "Dimensions";
const _Dime = "Dimension";
const _EDNSCSIP = "EDNS0ClientSubnetIP";
const _EDNSCSM = "EDNS0ClientSubnetMask";
const _EP = "EvaluationPeriods";
const _ESNI = "EnableSNI";
const _ETH = "EvaluateTargetHealth";
const _F = "Failover";
const _FQDN = "FullyQualifiedDomainName";
const _FT = "FailureThreshold";
const _Fl = "Flag";
const _GL = "GeoLocation";
const _GLCC = "GeoLocationContinentCode";
const _GLCCe = "GeoLocationCountryCode";
const _GLD = "GeoLocationDetails";
const _GLDL = "GeoLocationDetailsList";
const _GLSC = "GeoLocationSubdivisionCode";
const _GPL = "GeoProximityLocation";
const _HC = "HealthCheck";
const _HCC = "HealthCheckConfig";
const _HCCe = "HealthCheckCount";
const _HCI = "HealthCheckId";
const _HCN = "HealthCheckNonce";
const _HCO = "HealthCheckObservations";
const _HCOe = "HealthCheckObservation";
const _HCR = "HealthCheckRegion";
const _HCT = "HealthCheckType";
const _HCV = "HealthCheckVersion";
const _HCe = "HealthChecks";
const _HT = "HealthThreshold";
const _HZ = "HostedZone";
const _HZC = "HostedZoneConfig";
const _HZCo = "HostedZoneCount";
const _HZI = "HostedZoneId";
const _HZIM = "HostedZoneIdMarker";
const _HZS = "HostedZoneSummaries";
const _HZSo = "HostedZoneSummary";
const _HZT = "HostedZoneType";
const _HZo = "HostedZones";
const _I = "Inverted";
const _IDHS = "InsufficientDataHealthStatus";
const _IPA = "IPAddress";
const _IPZ = "IsPrivateZone";
const _IT = "IsTruncated";
const _Id = "Id";
const _K = "Key";
const _KA = "KmsArn";
const _KMSA = "KeyManagementServiceArn";
const _KSK = "KeySigningKey";
const _KSKe = "KeySigningKeys";
const _KT = "KeyTag";
const _L = "Location";
const _LMD = "LastModifiedDate";
const _LN = "LocationName";
const _LS = "LinkedService";
const _LTFRR = "ListTagsForResourcesRequest";
const _LV = "LatestVersion";
const _LZG = "LocalZoneGroup";
const _La = "Latitude";
const _Li = "Limit";
const _Lo = "Longitude";
const _M = "Marker";
const _MI = "MaxItems";
const _ML = "MeasureLatency";
const _MN = "MetricName";
const _MR = "MaxResults";
const _MVA = "MultiValueAnswer";
const _Me = "Message";
const _N = "Name";
const _NCC = "NextContinentCode";
const _NCCe = "NextCountryCode";
const _NDNSN = "NextDNSName";
const _NHZI = "NextHostedZoneId";
const _NM = "NextMarker";
const _NRI = "NextRecordIdentifier";
const _NRN = "NextRecordName";
const _NRT = "NextRecordType";
const _NS = "NameServers";
const _NSC = "NextSubdivisionCode";
const _NSa = "NameServer";
const _NT = "NextToken";
const _Na = "Nameserver";
const _Nam = "Namespace";
const _No = "Nonce";
const _O = "Owner";
const _OA = "OwningAccount";
const _OS = "OwningService";
const _P = "Port";
const _PK = "PublicKey";
const _PZ = "PrivateZone";
const _Pe = "Period";
const _Pr = "Protocol";
const _QLC = "QueryLoggingConfig";
const _QLCu = "QueryLoggingConfigs";
const _R = "Regions";
const _RC = "ResponseCode";
const _RCA = "RoutingControlArn";
const _RD = "ResourceDescription";
const _RDE = "RecordDataEntry";
const _RDa = "RData";
const _RDe = "RecordData";
const _RE = "ResetElements";
const _REN = "ResettableElementName";
const _RI = "ResourceId";
const _RIP = "ResolverIP";
const _RIe = "ResourceIds";
const _RIeq = "RequestInterval";
const _RN = "RecordName";
const _RP = "ResourcePath";
const _RR = "ResourceRecord";
const _RRS = "ResourceRecordSets";
const _RRSC = "ResourceRecordSetCount";
const _RRSF = "ResourceRecordSetFailover";
const _RRSI = "ResourceRecordSetIdentifier";
const _RRSMVA = "ResourceRecordSetMultiValueAnswer";
const _RRSR = "ResourceRecordSetRegion";
const _RRSW = "ResourceRecordSetWeight";
const _RRSe = "ResourceRecordSet";
const _RRT = "RRType";
const _RRe = "ResourceRecords";
const _RT = "RecordType";
const _RTK = "RemoveTagKeys";
const _RTS = "ResourceTagSet";
const _RTSe = "ResourceTagSets";
const _RTe = "ResourceType";
const _Re = "Region";
const _S = "Status";
const _SA = "SubmittedAt";
const _SAM = "SigningAlgorithmMnemonic";
const _SAT = "SigningAlgorithmType";
const _SC = "SubdivisionCode";
const _SCC = "StartContinentCode";
const _SCCt = "StartCountryCode";
const _SI = "SetIdentifier";
const _SKN = "SigningKeyName";
const _SKS = "SigningKeyString";
const _SKSi = "SigningKeyStatus";
const _SM = "StatusMessage";
const _SN = "SubdivisionName";
const _SP = "ServicePrincipal";
const _SR = "StatusReport";
const _SRI = "StartRecordIdentifier";
const _SRN = "StartRecordName";
const _SRT = "StartRecordType";
const _SS = "SearchString";
const _SSC = "StartSubdivisionCode";
const _SSe = "ServeSignature";
const _St = "Statistic";
const _Sta = "State";
const _T = "Type";
const _TK = "TagKey";
const _TP = "TrafficPolicy";
const _TPC = "TrafficPolicyComment";
const _TPCr = "TrafficPolicyCount";
const _TPD = "TrafficPolicyDocument";
const _TPI = "TrafficPolicyId";
const _TPIC = "TrafficPolicyInstanceCount";
const _TPII = "TrafficPolicyInstanceId";
const _TPIM = "TrafficPolicyIdMarker";
const _TPINM = "TrafficPolicyInstanceNameMarker";
const _TPITM = "TrafficPolicyInstanceTypeMarker";
const _TPIr = "TrafficPolicyInstance";
const _TPIra = "TrafficPolicyInstances";
const _TPN = "TrafficPolicyName";
const _TPS = "TrafficPolicySummaries";
const _TPSr = "TrafficPolicySummary";
const _TPT = "TrafficPolicyType";
const _TPV = "TrafficPolicyVersion";
const _TPVM = "TrafficPolicyVersionMarker";
const _TPr = "TrafficPolicies";
const _TRI = "TagResourceId";
const _TTL = "TTL";
const _TV = "TagValue";
const _Ta = "Tag";
const _Tag = "Tags";
const _Th = "Threshold";
const _UHCR = "UpdateHealthCheckRequest";
const _UHZCR = "UpdateHostedZoneCommentRequest";
const _UTPCR = "UpdateTrafficPolicyCommentRequest";
const _UTPIR = "UpdateTrafficPolicyInstanceRequest";
const _UUID = "UUID";
const _V = "Value";
const _VPC = "VPC";
const _VPCI = "VPCId";
const _VPCR = "VPCRegion";
const _VPCs = "VPCs";
const _Ve = "Version";
const _W = "Weight";
const _c = "continentcode";
const _co = "countrycode";
const _d = "delegationsetid";
const _dn = "dnsname";
const _e = "edns0clientsubnetip";
const _ed = "edns0clientsubnetmask";
const _h = "hostedzonetype";
const _ho = "hostedzoneid";
const _i = "identifier";
const _id = "id";
const _l = "location";
const _m = "maxresults";
const _ma = "maxitems";
const _mar = "marker";
const _me = "member";
const _mes = "message";
const _mess = "messages";
const _n = "nexttoken";
const _na = "name";
const _r = "recordname";
const _re = "recordtype";
const _res = "resolverip";
const _s = "subdivisioncode";
const _st = "startcontinentcode";
const _sta = "startcountrycode";
const _star = "startsubdivisioncode";
const _t = "type";
const _tr = "trafficpolicyid";
const _tra = "trafficpolicyinstancename";
const _traf = "trafficpolicyinstancetype";
const _traff = "trafficpolicyversion";
const _v = "vpcid";
const _ve = '<?xml version="1.0" encoding="UTF-8"?>';
const _ver = "version";
const _vp = "vpcregion";
