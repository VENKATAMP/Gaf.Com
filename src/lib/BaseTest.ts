import { test as base } from '@playwright/test';
//replace with export of page with locators
import { ExamplePage } from '../pageFactory/ExamplePage';
import { HomePage } from '../pageFactory/HomePage';
import { AlertBannerPage } from '../pageFactory/AlertBanner';
import { RoofingGafPage } from '../pageFactory/RoofingGafPage';
import { BuildingMaterialPage } from '../pageFactory/BuildingMaterialPage';
import { PlanDesignPage } from '../pageFactory/PlanDesignPage';
import {ContractorListingPage} from '../pageFactory/ContractorListingPage';
import {ContractorDetailsPage} from '../pageFactory/ContractorDetailsPage';
import {CallToActionRowImagePage} from '../pageFactory/CallToActionRowImagePage';
import {LinkGridGridLinkPage} from '../pageFactory/LinkGridGridLinkPage';
import {CardWithTitleOverlayPage} from '../pageFactory/CardWithTitleOverlayPage';
import {PressReleasePage} from '../pageFactory/PressReleasePage';
import {DocumentPackagePage} from '../pageFactory/DocumentPackagePage';
import {CostEstimateQuizPage} from '../pageFactory/CostEstimateQuizPage';
import {DocumentsListFilterPage} from '../pageFactory/DocumentsListFilterPage';
import {ResourcesPage } from '../pageFactory/ResourcesPage';
import {ShingleMatchQuizPage} from '../pageFactory/ShingleMatchQuizPage';
import {UserReviewLandingPage} from '../pageFactory/UserReviewLandingPage';
import { WebActions } from './WebActions';
import {RoofingContShinglesPage} from '../pageFactory/RoofingContShinglesPage'




//replase with POM classes
const test = base.extend<{
    examplePage: ExamplePage;
    alertBannerPage: AlertBannerPage;
    roofingGafPage: RoofingGafPage;
    buildingMaterialPage: BuildingMaterialPage;
    planDesignPage: PlanDesignPage;
    homePage:   HomePage;
    contractorListingPage: ContractorListingPage;
    contractorDetailsPage: ContractorDetailsPage;
    callToActionRowImagePage: CallToActionRowImagePage;
    linkGridGridLinkPage: LinkGridGridLinkPage;
    cardWithTitleOverlayPage: CardWithTitleOverlayPage;
    pressReleasePage: PressReleasePage;
    documentPackagePage: DocumentPackagePage;
    costEstimateQuizPage: CostEstimateQuizPage;
    documentsListFilterPage: DocumentsListFilterPage;
    resourcesPage: ResourcesPage;
    shingleMatchQuizPage: ShingleMatchQuizPage;
    userReviewLandingPage: UserReviewLandingPage;
    webActions: WebActions;
    roofingContShinglesPage: RoofingContShinglesPage;

    
}>({
    examplePage: async ({ page, context }, use) => {
        await use(new ExamplePage(page, context));
        },
    homePage: async ({ page, context }, use) => {
        await use(new HomePage(page, context));
    },
    alertBannerPage: async ({ page, context }, use) => {
        await use(new AlertBannerPage(page, context));
    },
    roofingGafPage: async ({page, context}, use) => {
        await use(new RoofingGafPage(page, context));            
    },
    buildingMaterialPage: async ({page, context}, use) => {
        await use(new BuildingMaterialPage(page, context));            
    },
    planDesignPage: async ({page, context}, use) => {
        await use(new PlanDesignPage(page, context));            
    },
    contractorListingPage: async ({page, context}, use) => {
        await use(new ContractorListingPage(page, context));            
    },
    contractorDetailsPage: async ({page, context}, use) => {
        await use(new ContractorDetailsPage(page, context));            
    },
    callToActionRowImagePage: async ({page, context}, use) => {
        await use(new CallToActionRowImagePage(page, context));            
    },
    linkGridGridLinkPage: async ({page, context}, use) => {
        await use(new LinkGridGridLinkPage(page, context));            
    },
    cardWithTitleOverlayPage: async ({page, context}, use) => {
        await use(new CardWithTitleOverlayPage(page, context));            
    },
    pressReleasePage: async ({page, context}, use) => {
        await use(new PressReleasePage(page, context));
    },
    documentPackagePage: async ({page, context}, use) => {
        await use(new DocumentPackagePage(page, context));
    },
    costEstimateQuizPage: async ({page, context}, use) => {
        await use(new CostEstimateQuizPage(page, context));
    },    
    documentsListFilterPage: async ({page, context}, use) => {
        await use(new DocumentsListFilterPage(page, context));
    },
    resourcesPage: async ({page, context}, use) => {
        await use(new ResourcesPage(page, context));
    },
    shingleMatchQuizPage: async ({page, context}, use) => {
        await use(new ShingleMatchQuizPage(page, context));
    },    
    userReviewLandingPage: async ({page, context}, use) => {
        await use(new UserReviewLandingPage(page, context));
    },
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },
    roofingContShinglesPage: async ({ page, context }, use) => {
        await use(new RoofingContShinglesPage(page, context));
},
})

export default test;
export const expect = test.expect;
