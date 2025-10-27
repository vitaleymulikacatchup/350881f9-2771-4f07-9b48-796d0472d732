import React from 'react';

const Footer = () => {
  const footerSections = {
    'Shop and Learn': [
      'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'
    ],
    'Apple Wallet': [
      'Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'
    ],
    'Account': [
      'Manage Your Apple Account', 'Apple Store Account', 'iCloud.com'
    ],
    'Entertainment': [
      'Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store'
    ],
    'Apple Store': [
      'Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Carrier Deals at Apple', 'Order Status', 'Shopping Help'
    ],
    'For Business': [
      'Apple and Business', 'Shop for Business'
    ],
    'For Education': [
      'Apple and Education', 'Shop for K-12', 'Shop for College'
    ],
    'For Healthcare': [
      'Apple and Healthcare'
    ],
    'For Government': [
      'Apple and Government', 'Shop for Veterans and Military', 'Shop for State and Local Employees', 'Shop for Federal Employees'
    ],
    'Apple Values': [
      'Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supply Chain Innovation'
    ],
    'About Apple': [
      'Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'
    ]
  };

  return (
    <footer className="bg-apple-light-gray py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Disclaimer text */}
        <div className="text-xs text-gray-600 mb-8 leading-relaxed">
          <p className="mb-4">
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse, cancel, or limit quantity of any trade-in transaction for any reason. More details are available from Apple's trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
          </p>
          <p className="mb-4">
            To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
          </p>
          <p className="mb-4">
            Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.
          </p>
          <p className="mb-4">
            If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
          </p>
          <p className="mb-4">
            Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218
          </p>
          <p className="mb-4">
            A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.
          </p>
          <p>
            Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-black mb-3">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE (1-800-692-7753).
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              Copyright © 2025 Apple Inc. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Sales and Refunds</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Legal</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Site Map</a>
              <span className="ml-4">United States</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;