# Piyush Unde - Interactive Portfolio

A modern, interactive portfolio website built with React, featuring smooth animations, interactive elements, and a hidden admin panel for project management.

## ✨ Features

### 🎨 Interactive Design
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with gradient accents
- **Hover Effects**: Interactive elements that respond to user interaction

### 🚀 Enhanced Components
- **Hero Section**: Animated text, floating elements, and interactive buttons
- **Skills Display**: Visual skill bars with proficiency levels and icons
- **Projects Gallery**: Beautiful project cards with hover effects
- **Contact Form**: Functional contact form with validation and feedback
- **Smooth Scrolling**: Seamless navigation between sections

### 🔐 Hidden Admin Panel
- **Secret Access**: Press `Ctrl + Shift + A` to open the admin panel
- **Project Management**: Add, edit, and delete projects
- **Rich Project Data**: Support for images, technologies, and links
- **Local Storage**: Projects are saved locally in your browser
- **Professional Interface**: Clean admin UI for easy project management

## 🛠️ Technology Stack

- **Frontend**: React 18, Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Storage**: Local Storage API

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd piyush_portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔐 Admin Panel Usage

### Accessing the Admin Panel
1. **Secret Key Combination**: Press `Ctrl + Shift + A` anywhere on the page
2. **Visual Indicator**: The navbar shows "Admin: Ctrl+Shift+A" as a subtle hint
3. **Modal Interface**: A professional admin panel will appear

### Managing Projects
1. **Add New Project**:
   - Click "Add Project" button
   - Fill in project details (name, description, link, technologies, image URL)
   - Click "Add Project" to save

2. **Edit Existing Project**:
   - Click the edit (pencil) icon on any project
   - Modify the details
   - Click "Update Project" to save changes

3. **Delete Project**:
   - Click the delete (trash) icon on any project
   - Confirm deletion in the popup

### Project Fields
- **Name**: Project title (required)
- **Description**: Detailed project description (required)
- **Link**: Live demo or GitHub repository URL
- **Technologies**: Comma-separated list of technologies used
- **Image URL**: Project screenshot or logo image URL

## 🎯 Portfolio Sections

### 1. Hero Section
- Animated introduction with floating elements
- Interactive buttons for navigation
- Skills preview with hover effects

### 2. About Section
- Personal information and background
- Professional summary

### 3. Skills Section
- Categorized skill display with proficiency bars
- Interactive skill cards with icons
- Learning goals and future skills

### 4. Projects Section
- Dynamic project gallery
- Technology tags and project links
- Professional project cards with hover effects

### 5. Education Section
- Academic background and achievements

### 6. Contact Section
- Interactive contact form
- Contact information with icons
- Social media links
- Location and availability status

## 🎨 Customization

### Colors and Themes
The portfolio uses a blue-to-purple gradient theme that can be easily customized in the Tailwind CSS classes.

### Adding New Sections
1. Create a new component in the `src/components/` directory
2. Import and add it to `App.js`
3. Update the navigation if needed

### Modifying Animations
All animations are powered by Framer Motion and can be customized in each component's `variants` object.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full-featured experience with grid layouts
- **Tablet**: Adapted layouts for medium screens
- **Mobile**: Mobile-first design with touch-friendly interactions

## 🔒 Security Features

- **Hidden Admin Access**: Admin panel is completely hidden from regular users
- **Local Storage**: No external database or API calls
- **Client-Side Only**: All functionality runs in the browser

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in your project directory
3. Follow the prompts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please contact:
- **Email**: piyushunde87@gmail.com
- **LinkedIn**: [Piyush Unde](https://www.linkedin.com/in/piyush-unde-6b1a07287/)
- **GitHub**: [Piyush3430](https://github.com/Piyush3430)

---

**Built with ❤️ by Piyush Unde**
