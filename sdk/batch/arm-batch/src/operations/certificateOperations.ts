/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/certificateOperationsMappers";
import * as Parameters from "../models/parameters";
import { BatchManagementClientContext } from "../batchManagementClientContext";

/** Class representing a CertificateOperations. */
export class CertificateOperations {
  private readonly client: BatchManagementClientContext;

  /**
   * Create a CertificateOperations.
   * @param {BatchManagementClientContext} client Reference to the service client.
   */
  constructor(client: BatchManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the certificates in the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateListByBatchAccountResponse>
   */
  listByBatchAccount(resourceGroupName: string, accountName: string, options?: Models.CertificateListByBatchAccountOptionalParams): Promise<Models.CertificateListByBatchAccountResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param callback The callback
   */
  listByBatchAccount(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.ListCertificatesResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBatchAccount(resourceGroupName: string, accountName: string, options: Models.CertificateListByBatchAccountOptionalParams, callback: msRest.ServiceCallback<Models.ListCertificatesResult>): void;
  listByBatchAccount(resourceGroupName: string, accountName: string, options?: Models.CertificateListByBatchAccountOptionalParams | msRest.ServiceCallback<Models.ListCertificatesResult>, callback?: msRest.ServiceCallback<Models.ListCertificatesResult>): Promise<Models.CertificateListByBatchAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listByBatchAccountOperationSpec,
      callback) as Promise<Models.CertificateListByBatchAccountResponse>;
  }

  /**
   * Creates a new certificate inside the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   * thumbprint separated by a dash, and must match the certificate data in the request. For example
   * SHA1-a3d1c5.
   * @param parameters Additional parameters for certificate creation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, certificateName: string, parameters: Models.CertificateCreateOrUpdateParameters, options?: Models.CertificateCreateOptionalParams): Promise<Models.CertificateCreateResponse> {
    return this.beginCreate(resourceGroupName,accountName,certificateName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CertificateCreateResponse>;
  }

  /**
   * Updates the properties of an existing certificate.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   * thumbprint separated by a dash, and must match the certificate data in the request. For example
   * SHA1-a3d1c5.
   * @param parameters Certificate entity to update.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, certificateName: string, parameters: Models.CertificateCreateOrUpdateParameters, options?: Models.CertificateUpdateOptionalParams): Promise<Models.CertificateUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   * thumbprint separated by a dash, and must match the certificate data in the request. For example
   * SHA1-a3d1c5.
   * @param parameters Certificate entity to update.
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, certificateName: string, parameters: Models.CertificateCreateOrUpdateParameters, callback: msRest.ServiceCallback<Models.Certificate>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   * thumbprint separated by a dash, and must match the certificate data in the request. For example
   * SHA1-a3d1c5.
   * @param parameters Certificate entity to update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, certificateName: string, parameters: Models.CertificateCreateOrUpdateParameters, options: Models.CertificateUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Certificate>): void;
  update(resourceGroupName: string, accountName: string, certificateName: string, parameters: Models.CertificateCreateOrUpdateParameters, options?: Models.CertificateUpdateOptionalParams | msRest.ServiceCallback<Models.Certificate>, callback?: msRest.ServiceCallback<Models.Certificate>): Promise<Models.CertificateUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        certificateName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.CertificateUpdateResponse>;
  }

  /**
   * Deletes the specified certificate.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   * thumbprint separated by a dash, and must match the certificate data in the request. For example
   * SHA1-a3d1c5.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateDeleteResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, certificateName: string, options?: msRest.RequestOptionsBase): Promise<Models.CertificateDeleteResponse> {
    return this.beginDeleteMethod(resourceGroupName,accountName,certificateName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CertificateDeleteResponse>;
  }

  /**
   * Gets information about the specified certificate.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   * thumbprint separated by a dash, and must match the certificate data in the request. For example
   * SHA1-a3d1c5.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateGetResponse>
   */
  get(resourceGroupName: string, accountName: string, certificateName: string, options?: msRest.RequestOptionsBase): Promise<Models.CertificateGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   * thumbprint separated by a dash, and must match the certificate data in the request. For example
   * SHA1-a3d1c5.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, certificateName: string, callback: msRest.ServiceCallback<Models.Certificate>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   * thumbprint separated by a dash, and must match the certificate data in the request. For example
   * SHA1-a3d1c5.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, certificateName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Certificate>): void;
  get(resourceGroupName: string, accountName: string, certificateName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Certificate>, callback?: msRest.ServiceCallback<Models.Certificate>): Promise<Models.CertificateGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        certificateName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CertificateGetResponse>;
  }

  /**
   * If you try to delete a certificate that is being used by a pool or compute node, the status of
   * the certificate changes to deleteFailed. If you decide that you want to continue using the
   * certificate, you can use this operation to set the status of the certificate back to active. If
   * you intend to delete the certificate, you do not need to run this operation after the deletion
   * failed. You must make sure that the certificate is not being used by any resources, and then you
   * can try again to delete the certificate.
   * @summary Cancels a failed deletion of a certificate from the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   * thumbprint separated by a dash, and must match the certificate data in the request. For example
   * SHA1-a3d1c5.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateCancelDeletionResponse>
   */
  cancelDeletion(resourceGroupName: string, accountName: string, certificateName: string, options?: msRest.RequestOptionsBase): Promise<Models.CertificateCancelDeletionResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   * thumbprint separated by a dash, and must match the certificate data in the request. For example
   * SHA1-a3d1c5.
   * @param callback The callback
   */
  cancelDeletion(resourceGroupName: string, accountName: string, certificateName: string, callback: msRest.ServiceCallback<Models.Certificate>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   * thumbprint separated by a dash, and must match the certificate data in the request. For example
   * SHA1-a3d1c5.
   * @param options The optional parameters
   * @param callback The callback
   */
  cancelDeletion(resourceGroupName: string, accountName: string, certificateName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Certificate>): void;
  cancelDeletion(resourceGroupName: string, accountName: string, certificateName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Certificate>, callback?: msRest.ServiceCallback<Models.Certificate>): Promise<Models.CertificateCancelDeletionResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        certificateName,
        options
      },
      cancelDeletionOperationSpec,
      callback) as Promise<Models.CertificateCancelDeletionResponse>;
  }

  /**
   * Creates a new certificate inside the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   * thumbprint separated by a dash, and must match the certificate data in the request. For example
   * SHA1-a3d1c5.
   * @param parameters Additional parameters for certificate creation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, accountName: string, certificateName: string, parameters: Models.CertificateCreateOrUpdateParameters, options?: Models.CertificateBeginCreateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        certificateName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes the specified certificate.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   * thumbprint separated by a dash, and must match the certificate data in the request. For example
   * SHA1-a3d1c5.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, accountName: string, certificateName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        certificateName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists all of the certificates in the specified account.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateListByBatchAccountNextResponse>
   */
  listByBatchAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CertificateListByBatchAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBatchAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListCertificatesResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBatchAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListCertificatesResult>): void;
  listByBatchAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListCertificatesResult>, callback?: msRest.ServiceCallback<Models.ListCertificatesResult>): Promise<Models.CertificateListByBatchAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBatchAccountNextOperationSpec,
      callback) as Promise<Models.CertificateListByBatchAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByBatchAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.maxresults,
    Parameters.select,
    Parameters.filter,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListCertificatesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.certificateName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CertificateCreateOrUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Certificate,
      headersMapper: Mappers.CertificateUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.certificateName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Certificate,
      headersMapper: Mappers.CertificateGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const cancelDeletionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}/cancelDelete",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.certificateName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Certificate,
      headersMapper: Mappers.CertificateCancelDeletionHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.certificateName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CertificateCreateOrUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Certificate,
      headersMapper: Mappers.CertificateCreateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.certificateName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.CertificateDeleteHeaders
    },
    202: {
      headersMapper: Mappers.CertificateDeleteHeaders
    },
    204: {
      headersMapper: Mappers.CertificateDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByBatchAccountNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListCertificatesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
