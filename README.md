# CareerCheck

CareerCheck is a web application designed to help users explore and evaluate their career options. Users can input their personal information, education, training, work experience, and personal circumstances to receive personalized career recommendations and guidance.

## Table of Contents

- [Directory](#Directory)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Directory

```bash
.
├── README.md
├── jsconfig.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── images
│       ├── careercheck-logo.png
│       ├── careercheck.png
│       ├── favicon.ico
│       ├── nordwood-themes-unsplash.jpg
│       └── ruel-nopal.png
├── src
│   ├── app
│   │   ├── data
│   │   │   ├── landingData.json
│   │   │   └── personalInfo.json
│   │   └── helper
│   ├── components
│   │   ├── AddLinkButton.js
│   │   ├── AuthorSection.js
│   │   ├── CareerSection.js
│   │   ├── FooterSection.js
│   │   ├── HeroSection.js
│   │   ├── MetaHead.js
│   │   ├── QuestionnaireSections.js
│   │   └── questionnaire
│   │       ├── Education.js
│   │       ├── PersonalCircumstances.js
│   │       ├── PersonalInfo.js
│   │       ├── Training.js
│   │       └── WorkExperience.js
│   ├── pages
│   │   ├── _app.js
│   │   ├── career
│   │   │   └── [careerName].js
│   │   └── index.js
│   └── styles
│       ├── buttons.css
│       ├── general.css
│       ├── globals.css
│       └── tabs.css
└── tailwind.config.js
```

## Features

- Personal Information: Collects user's basic personal details.
- Education: Allows users to input their educational background.
- Training: Users can add any training or certifications they have completed.
- Work Experience: Users can input their work experience and job history.
- Personal Circumstances: Users can add any personal circumstances that may impact their career choices.
- Personalized Recommendations: Based on the user's input, the app provides tailored career guidance.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/raketbizdev/careercheck.git
```

2. Change to the project directory:

```bash
cd careercheck
```

3. Install the required dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The application should now be running on `http://localhost:3000`.

## Usage

To use CareerCheck, simply navigate to the application URL (either local or deployed) and start filling out the different sections of the questionnaire. Once all the relevant information has been entered, click the 'Submit' button to receive personalized career recommendations and guidance.

## Contributing

1. Fork the repository.
2. Create a new branch with a descriptive name (e.g., `feature/new-section` or `fix/typo`).
3. Commit your changes to the new branch.
4. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License. For more information, please see the [LICENSE](LICENSE) file.

---

Made with ❤️ by [Ruel](https://github.com/raketbizdev)
