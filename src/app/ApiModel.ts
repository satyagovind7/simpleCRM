// *************
// Copyright (c) RYMEDI INC . All rights reserved.
// See LICENSE file in the project root for full license information.
// Purpose:
// version 1.0  Initial development: 07/24/2019 Developer Team: ITSCM
// Author: Hussain <hkadim@itscm.de>
// *************

// Templates for different models used in resource management screen

 export namespace ApiModel {
    export interface ResourceDataObject {
      type: string;
      country: string;
      state: string;
      city: string;
      location: string;
      line: string;
      workcenter: string;
      area: string;
    }
    export interface BackendResponse {
      success: boolean;
      content: any;
      timestamp: Date;
    }
    export interface PaginationData {
      pageSize?: number;
      pageNumber?: number;
    }
  
    export interface UserLog {
      id: number;
      firstName: string;
      lastName: string;
      badgeNumber?: number;
    }
  
    export interface UserLogHistory {
      id: number;
      uuid: string;
      type: string;
      crudType: string;
      name: string;
      loggedBy: UserLog;
      loggedAt: Date;
    }
    export interface TemplatePayload {
      type: string;
      data: number[];
    }
  
    export interface PrinterVendor {
      vendorId: string;
      vendorName: string;
    }
  
    export interface TemplateType {
      templateTypeId: string;
      templateTypeName: string;
      templateTypeDescription: string;
    }
  
    export interface Attribute {
      attributeId: string;
      attributeName: string;
      attributeType: string;
      attributeOrdinal: number;
      attributeRequired: number;
      attributeMaxLength: number;
      attributeActive: number;
    }
  
    export interface Template {
      templateInstanceId: string;
      templateId: string;
      templateName: string;
      templateVersion: number;
      compatibilityMetadata: any[];
      templateTypeId: string;
      templatePayload: TemplatePayload;
      printerVendorId: string;
      printerVendor: PrinterVendor;
      templateType: TemplateType;
      attributes: Attribute[];
    }
  
    export interface PrinterModel {
      modelId: string;
      modelName: string;
    }
  
    export interface PrinterVendor2 {
      vendorId: string;
      vendorName: string;
    }
  
    export interface PrinterMedia {
      printerMediaId: string;
      mediaName: string;
      mediaDescription: string;
      mediaWidth: number;
      mediaLength: number;
      mediaUnits: string;
    }
  
    export interface Role {
      roleId?: string;
      orgId: string;
      roleName: string;
    }
  
    export interface Printer {
      printerInstanceId: string;
      printerId: string;
      printerModelId: string;
      printerVendorId: string;
      printerMediaId: string;
      printerName: string;
      printerLocationNickname: string;
      printerIp: number;
      printerMac: string;
      printerSn: string;
      printerVersion: number;
      active: number;
      printerLines: PrinterLine[];
      printerLocations: PrinterLocation[];
      templates: Template[];
      printerModel: PrinterModel;
      printerVendor: PrinterVendor2;
      printerMedia: PrinterMedia;
      roles: Role[];
    }
  
    export interface PrinterLocation {
      printerInstanceId?: string;
      locationId: string;
      printerLocationId?: string;
    }
  
    export interface PrinterLine {
      printerInstanceId?: string;
      lineId: string;
      printerLineId?: string;
    }
  
    export interface UserRole {
      id: number;
      userRole: string;
    }
  
    export interface Location {
      id: number;
      uuid: string;
      location_name: string;
      fk_area_id: number;
      createdAt: Date;
      updatedAt: Date;
      lines?: Line[];
      area?: Area;
      status: string;
    }
  
    export interface Area {
      id: number;
      uuid: string;
      area_name: string;
      country: string;
      state: string;
      city: string;
      createdAt: Date;
      updatedAt: Date;
      locations?: Location[];
    }
  
    export interface Line {
      id: number;
      uuid: string;
      line_name: string;
      fk_location_id: number;
      fk_process_types_id: number;
      createdAt: Date;
      updatedAt: Date;
      lots?: Lot[];
      location?: Location;
      status: string;
    }
  
    export interface Lot {
      id: number;
      uuid: string;
      name: string;
      fk_line_id: number;
      createdAt: Date;
      updatedAt: Date;
      line?: Line;
      status: string;
    }
  
    export interface Employee {
      id: number;
      uuid: string;
      title: number;
      firstName: string;
      middleName: string;
      lastName: string;
      badgeNumber?: string;
      username: string;
      password: string;
      fk_workcenter_id: number;
      sopStatus: boolean;
      contactEmail: string;
      contactPhone: string;
      contactAddress: string;
      isManager: number;
      fk_role_id: number;
      jobLocation: number;
      status: string;
      authId: string;
      lastLogin?: Date;
      createdAt: Date;
      updatedAt: Date;
      userRole: UserRole;
      residenceHospital: string;
      canAdministerTests: boolean;
      empTrainingDetails: any;
      organizationName?: string;
      failsLogin?: number;
      locked?: boolean;
      autoLockedAt?: Date;
      employeeAddress?: any;
      department?: string;
      jobTitle?: string;
    }
  
    export interface Product {
      id: number;
      uuid: string;
      ProductCode: string;
      productName: string;
      manufacturerOrgId: number;
      description: string;
      SKU: string;
      UPC: string;
      GS1Label: number;
      manufacturer?: string;
      brand: string;
      subBrand: string;
      category: string;
      type: ProductType;
      container: ContainerType;
      size: number;
      packaging: string;
      price: number;
      salesPrice: number;
      weight: number;
      weightUnit: string;
      dimensions: string;
      status: GlobalStatus;
      taxCode: string;
      createdAt: Date;
      updatedAt: Date;
      cliaAudit: boolean;
      testingTechnology?: number;
      pcrSubType?: number;
    }
  
    export interface TestUnit {
      id: number;
      uuid: string;
      qr_code: string;
      printedAt: Date;
    }
  
    export interface Blockchain {
      id: number;
      uuid: string;
      qr_code: string;
      smartContractFunc: string;
      trxId: string;
      createdAt: Date;
      updatedAt: Date;
      eosNetworkURL: string;
      payload: string;
      appFunc: string;
    }
  
    enum GlobalStatus {
      ENABLED = 'ENABLED',
      DISABLED = 'DISABLED',
      DELETED = 'DELETED'
    }
  
    enum ProductType {
      SINGLE = 'Single use-blood'
    }
  
    enum ContainerType {
      BOX = 'Box'
    }
  
    export interface Payload {
      agree: boolean;
      email: string;
      gender: number;
      raceAndEthnicity: number;
      visited: number;
      lastname: string;
      birthDate: Date;
      condition: Condition;
      firstname: string;
      within6ft: number;
      phoneNumber: string;
      currentSymptoms: number;
      exposedToCorona: number;
      startExperiencing: number;
      companyAffiliation: string;
    }
  
    export interface Condition {
      HighBloodPressure: boolean;
    }
  
    export interface PatentHistory {
      id: number;
      uuid: string;
      payload: Payload;
      fk_irbmeta_id: number;
      fk_irbcontent_id: number;
      status: string;
      createdAt: Date;
      updatedAt: Date;
      agree: boolean;
      email: string;
      gender: number;
      raceAndEthnicity: number;
      visited: number;
      lastname: string;
      birthDate: Date;
      condition: Condition;
      firstname: string;
      within6ft: number;
      phoneNumber: string;
      currentSymptoms: number;
      exposedToCorona: number;
      startExperiencing: number;
      companyAffiliation: string;
      healthScore?: number;
      activeSymptoms?: any[];
    }
  
  }
  