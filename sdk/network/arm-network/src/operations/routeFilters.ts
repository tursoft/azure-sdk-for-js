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
import * as Mappers from "../models/routeFiltersMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a RouteFilters. */
export class RouteFilters {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a RouteFilters.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified route filter.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, routeFilterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,routeFilterName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified route filter.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param [options] The optional parameters
   * @returns Promise<Models.RouteFiltersGetResponse>
   */
  get(resourceGroupName: string, routeFilterName: string, options?: Models.RouteFiltersGetOptionalParams): Promise<Models.RouteFiltersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param callback The callback
   */
  get(resourceGroupName: string, routeFilterName: string, callback: msRest.ServiceCallback<Models.RouteFilter>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, routeFilterName: string, options: Models.RouteFiltersGetOptionalParams, callback: msRest.ServiceCallback<Models.RouteFilter>): void;
  get(resourceGroupName: string, routeFilterName: string, options?: Models.RouteFiltersGetOptionalParams | msRest.ServiceCallback<Models.RouteFilter>, callback?: msRest.ServiceCallback<Models.RouteFilter>): Promise<Models.RouteFiltersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        routeFilterName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RouteFiltersGetResponse>;
  }

  /**
   * Creates or updates a route filter in a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param routeFilterParameters Parameters supplied to the create or update route filter operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RouteFiltersCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.RouteFilter, options?: msRest.RequestOptionsBase): Promise<Models.RouteFiltersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,routeFilterName,routeFilterParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RouteFiltersCreateOrUpdateResponse>;
  }

  /**
   * Updates tags of a route filter.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param parameters Parameters supplied to update route filter tags.
   * @param [options] The optional parameters
   * @returns Promise<Models.RouteFiltersUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, routeFilterName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.RouteFiltersUpdateTagsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param parameters Parameters supplied to update route filter tags.
   * @param callback The callback
   */
  updateTags(resourceGroupName: string, routeFilterName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.RouteFilter>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param parameters Parameters supplied to update route filter tags.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateTags(resourceGroupName: string, routeFilterName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilter>): void;
  updateTags(resourceGroupName: string, routeFilterName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RouteFilter>, callback?: msRest.ServiceCallback<Models.RouteFilter>): Promise<Models.RouteFiltersUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        routeFilterName,
        parameters,
        options
      },
      updateTagsOperationSpec,
      callback) as Promise<Models.RouteFiltersUpdateTagsResponse>;
  }

  /**
   * Gets all route filters in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.RouteFiltersListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.RouteFiltersListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RouteFilterListResult>, callback?: msRest.ServiceCallback<Models.RouteFilterListResult>): Promise<Models.RouteFiltersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.RouteFiltersListByResourceGroupResponse>;
  }

  /**
   * Gets all route filters in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.RouteFiltersListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.RouteFiltersListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RouteFilterListResult>, callback?: msRest.ServiceCallback<Models.RouteFilterListResult>): Promise<Models.RouteFiltersListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.RouteFiltersListResponse>;
  }

  /**
   * Deletes the specified route filter.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, routeFilterName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        routeFilterName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a route filter in a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param routeFilterParameters Parameters supplied to the create or update route filter operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.RouteFilter, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        routeFilterName,
        routeFilterParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all route filters in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RouteFiltersListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RouteFiltersListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RouteFilterListResult>, callback?: msRest.ServiceCallback<Models.RouteFilterListResult>): Promise<Models.RouteFiltersListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.RouteFiltersListByResourceGroupNextResponse>;
  }

  /**
   * Gets all route filters in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RouteFiltersListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RouteFiltersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RouteFilterListResult>, callback?: msRest.ServiceCallback<Models.RouteFilterListResult>): Promise<Models.RouteFiltersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.RouteFiltersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeFilterName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilter
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeFilterName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilter
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/routeFilters",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeFilterName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeFilterName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "routeFilterParameters",
    mapper: {
      ...Mappers.RouteFilter,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilter
    },
    201: {
      bodyMapper: Mappers.RouteFilter
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.RouteFilterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.RouteFilterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
