import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus, Trash2, Edit2, LogOut, Upload, Check, Loader2, Sparkles,
  Briefcase, Award, FolderKanban, Link as LinkIcon, UserPlus, Image as ImageIcon,
  Lock, Mail, Eye, EyeOff, GraduationCap, Laptop
} from 'lucide-react';

export default function AdminPage() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('projects');

  // Auth Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  // Projects CRUD State
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [projectForm, setProjectForm] = useState({
    id: '',
    app_name: '',
    title: '',
    year: '',
    role: '',
    primary_color: '1C6EA4',
    tags: '',
    description: '',
    image_url: '',
    logo_url: '',
    section: 'UI/UX',
    is_work: false,
    // Details (saved as nested object or separate project_details insert)
    overview: '',
    team: [], // Array of {name, role, image, linkedin}
    role_list: '', // Comma separated roles
    timeline: '',
    tools: '',
    problems: [], // Array of {title, description}
    solutions: [], // Array of {title, description}
    colors: [], // Array of {hex, name}
    typography_font: 'Inter',
    typography_desc: '',
    design_system_images: [], // Array of URLs
    logo_images: [], // Array of {src, label}
    bento_images: [], // Array of URLs
    figma_link: ''
  });

  // Achievements State
  const [achievements, setAchievements] = useState([]);
  const [editingAchievement, setEditingAchievement] = useState(null);
  const [achievementForm, setAchievementForm] = useState({
    date: '',
    company: '',
    role: ''
  });

  // Experiences State
  const [experiences, setExperiences] = useState([]);
  const [editingExperience, setEditingExperience] = useState(null);
  const [experienceForm, setExperienceForm] = useState({
    date: '',
    company: '',
    role: '',
    is_active: false
  });

  // Education State
  const [education, setEducation] = useState([]);
  const [editingEducation, setEditingEducation] = useState(null);
  const [educationForm, setEducationForm] = useState({
    date: '',
    institution: '',
    degree: '',
    is_active: false
  });

  // Work State
  const [work, setWork] = useState([]);
  const [editingWork, setEditingWork] = useState(null);
  const [workForm, setWorkForm] = useState({
    date: '',
    institution: '',
    position: '',
    is_active: false
  });

  const [startMonth, setStartMonth] = useState('Jan');
  const [startYear, setStartYear] = useState('2025');
  const [endMonth, setEndMonth] = useState('Jan');
  const [endYear, setEndYear] = useState('2025');

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const years = Array.from({ length: 25 }, (_, i) => String(2020 + i)); // 2020 to 2044

  const parsePeriod = (dateStr) => {
    if (!dateStr) return { startM: 'Jan', startY: '2025', endM: 'Jan', endY: '2025', isPresent: false };
    const parts = dateStr.split(/\s*[-–]\s*/);
    const startPart = parts[0] || '';
    const endPart = parts[1] || '';

    const startSplit = startPart.trim().split(' ');
    const startM = startSplit[0] || 'Jan';
    const startY = startSplit[1] || '2025';

    let endM = 'Jan';
    let endY = '2025';
    let isPresent = false;

    if (endPart.trim().toLowerCase() === 'present') {
      isPresent = true;
    } else {
      const endSplit = endPart.trim().split(' ');
      endM = endSplit[0] || 'Jan';
      endY = endSplit[1] || '2025';
    }

    return { startM, startY, endM, endY, isPresent };
  };

  useEffect(() => {
    if (experienceForm.is_active) {
      setExperienceForm(prev => ({
        ...prev,
        date: `${startMonth} ${startYear} - Present`
      }));
    } else {
      setExperienceForm(prev => ({
        ...prev,
        date: `${startMonth} ${startYear} - ${endMonth} ${endYear}`
      }));
    }
  }, [startMonth, startYear, endMonth, endYear, experienceForm.is_active]);

  // Education Date selectors
  const eduYears = Array.from({ length: 30 }, (_, i) => String(2010 + i)); // 2010 to 2039
  const [eduStartYear, setEduStartYear] = useState('2023');
  const [eduEndYear, setEduEndYear] = useState('2027');

  const parseEduPeriod = (dateStr) => {
    if (!dateStr) return { startY: '2023', endY: '2027' };
    const parts = dateStr.split(/\s*[-–]\s*/);
    const startY = parts[0]?.trim() || '2023';
    const endPart = parts[1]?.trim() || '2027';
    const endY = endPart.toLowerCase() === 'present' ? '2027' : endPart;
    return { startY, endY };
  };

  useEffect(() => {
    if (educationForm.is_active) {
      setEducationForm(prev => ({
        ...prev,
        date: `${eduStartYear} - Present`
      }));
    } else {
      setEducationForm(prev => ({
        ...prev,
        date: `${eduStartYear} - ${eduEndYear}`
      }));
    }
  }, [eduStartYear, eduEndYear, educationForm.is_active]);

  // Work Date selectors
  const [workStartMonth, setWorkStartMonth] = useState('Jan');
  const [workStartYear, setWorkStartYear] = useState('2025');
  const [workEndMonth, setWorkEndMonth] = useState('Jan');
  const [workEndYear, setWorkEndYear] = useState('2025');

  const parseWorkPeriod = (dateStr) => {
    if (!dateStr) return { startM: 'Jan', startY: '2025', endM: 'Jan', endY: '2025' };
    const parts = dateStr.split(/\s*[-–]\s*/);
    const startPart = parts[0] || '';
    const endPart = parts[1] || '';

    const startSplit = startPart.trim().split(' ');
    const startM = startSplit[0] || 'Jan';
    const startY = startSplit[1] || '2025';

    let endM = 'Jan';
    let endY = '2025';

    if (endPart.trim().toLowerCase() !== 'present') {
      const endSplit = endPart.trim().split(' ');
      endM = endSplit[0] || 'Jan';
      endY = endSplit[1] || '2025';
    }

    return { startM, startY, endM, endY };
  };

  useEffect(() => {
    if (workForm.is_active) {
      setWorkForm(prev => ({
        ...prev,
        date: `${workStartMonth} ${workStartYear} - Present`
      }));
    } else {
      setWorkForm(prev => ({
        ...prev,
        date: `${workStartMonth} ${workStartYear} - ${workEndMonth} ${workEndYear}`
      }));
    }
  }, [workStartMonth, workStartYear, workEndMonth, workEndYear, workForm.is_active]);

  // Upload States
  const [uploadingImage, setUploadingImage] = useState({
    project_image: false,
    project_logo: false,
    team_member_image: {},
    design_system: false,
    bento: false,
  });

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (session) {
        fetchAllData();
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchAllData();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      await Promise.all([
        fetchProjects(),
        fetchAchievements(),
        fetchExperiences(),
        fetchEducation(),
        fetchWork()
      ]);
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchEducation = async () => {
    try {
      const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setEducation(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchWork = async () => {
    try {
      const { data, error } = await supabase
        .from('work')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setWork(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProjects = async () => {
    const { data: projData, error: projErr } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (projErr) throw projErr;

    // Fetch details for all projects to merge in local state
    const { data: detData, error: detErr } = await supabase
      .from('project_details')
      .select('*');

    if (detErr) throw detErr;

    const merged = projData.map(p => {
      const details = detData.find(d => d.project_id === p.id) || {};
      return {
        ...p,
        ...details,
        // Ensure default arrays/fields exist
        team: details.team || [],
        problems: details.problems || [],
        solutions: details.solutions || [],
        colors: details.colors || [],
        typography_font: details.typography?.fontFamily || 'Inter',
        typography_desc: details.typography?.description || '',
        design_system_images: details.design_system_images || [],
        logo_images: details.logo_images || [],
        bento_images: details.bento_images || [],
        figma_link: details.figma_link || ''
      };
    });

    setProjects(merged);
  };

  const fetchAchievements = async () => {
    const { data, error } = await supabase
      .from('achievements')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    setAchievements(data);
  };

  const fetchExperiences = async () => {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    setExperiences(data);
  };

  // --- Auth Handlers ---
  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (err) {
      setAuthError(err.message || 'Login failed. Please check credentials.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // --- Storage Upload Handler ---
  const handleFileUpload = async (file, folderPath, stateKey, subIndex = null) => {
    if (!file) return;

    // Set loading
    setUploadingImage(prev => {
      if (subIndex !== null) {
        return {
          ...prev,
          [stateKey]: { ...prev[stateKey], [subIndex]: true }
        };
      }
      return { ...prev, [stateKey]: true };
    });

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `${folderPath}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('portfolio-assets')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('portfolio-assets')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (err) {
      console.error('Upload error:', err);
      alert('Upload failed: ' + err.message);
      return null;
    } finally {
      // Clear loading
      setUploadingImage(prev => {
        if (subIndex !== null) {
          const subState = { ...prev[stateKey] };
          delete subState[subIndex];
          return { ...prev, [stateKey]: subState };
        }
        return { ...prev, [stateKey]: false };
      });
    }
  };

  // --- Project Form Helpers ---
  const resetProjectForm = () => {
    setEditingProject(null);
    setProjectForm({
      id: '',
      app_name: '',
      title: '',
      year: '',
      role: '',
      primary_color: '1C6EA4',
      tags: '',
      description: '',
      image_url: '',
      logo_url: '',
      section: 'UI/UX',
      is_work: false,
      overview: '',
      team: [],
      role_list: '',
      timeline: '',
      tools: '',
      problems: [],
      solutions: [],
      colors: [],
      typography_font: 'Inter',
      typography_desc: '',
      design_system_images: [],
      logo_images: [],
      bento_images: [],
      figma_link: ''
    });
  };

  const startEditProject = (p) => {
    setEditingProject(p.id);
    setProjectForm({
      id: p.id,
      app_name: p.app_name || '',
      title: p.title || '',
      year: p.year || '',
      role: p.role || '',
      primary_color: p.primary_color || '',
      tags: Array.isArray(p.tags) ? p.tags.join(', ') : '',
      description: p.description || '',
      image_url: p.image_url || '',
      logo_url: p.logo_url || '',
      section: p.section || 'UI/UX',
      is_work: p.is_work || false,
      overview: p.overview || '',
      team: p.team || [],
      role_list: Array.isArray(p.role_list) ? p.role_list.join(', ') : '',
      timeline: p.timeline || '',
      tools: p.tools || '',
      problems: p.problems || [],
      solutions: p.solutions || [],
      colors: p.colors || [],
      typography_font: p.typography_font || 'Inter',
      typography_desc: p.typography_desc || '',
      design_system_images: p.design_system_images || [],
      logo_images: p.logo_images || [],
      bento_images: p.bento_images || [],
      figma_link: p.figma_link || ''
    });
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    if (!projectForm.id || !projectForm.app_name) {
      alert('ID (URL slug) and App Name are required!');
      return;
    }

    setLoading(true);
    try {
      const pId = projectForm.id.trim().toLowerCase().replace(/\s+/g, '-');
      const tagsArray = projectForm.tags ? projectForm.tags.split(',').map(t => t.trim()) : [];
      const rolesArray = projectForm.role_list ? projectForm.role_list.split(',').map(r => r.trim()) : [];

      const projectData = {
        id: pId,
        app_name: projectForm.app_name,
        title: projectForm.title,
        year: projectForm.year,
        role: projectForm.role,
        primary_color: projectForm.primary_color,
        tags: tagsArray,
        description: projectForm.description,
        image_url: projectForm.image_url,
        logo_url: projectForm.logo_url,
        section: projectForm.section,
        is_work: projectForm.is_work
      };

      const detailData = {
        project_id: pId,
        overview: projectForm.overview,
        team: projectForm.team,
        role_list: rolesArray,
        timeline: projectForm.timeline,
        tools: projectForm.tools,
        problems: projectForm.problems,
        solutions: projectForm.solutions,
        colors: projectForm.colors,
        typography: {
          fontFamily: projectForm.typography_font,
          description: projectForm.typography_desc
        },
        design_system_images: projectForm.design_system_images,
        logo_images: projectForm.logo_images,
        bento_images: projectForm.bento_images,
        figma_link: projectForm.figma_link
      };

      if (editingProject) {
        // Handle rename / id change if ID was modified
        if (editingProject !== pId) {
          // Delete old one and create new one to handle primary key update simply
          const confirmRename = window.confirm("You changed the Project ID slug. This will recreate the entry. Continue?");
          if (!confirmRename) {
            setLoading(false);
            return;
          }
          await supabase.from('projects').delete().eq('id', editingProject);
        }
      }

      // Upsert projects table
      const { error: pErr } = await supabase
        .from('projects')
        .upsert(projectData);
      if (pErr) throw pErr;

      // Upsert project_details table
      const { error: dErr } = await supabase
        .from('project_details')
        .upsert(detailData);
      if (dErr) throw dErr;

      alert('Project saved successfully!');
      resetProjectForm();
      await fetchProjects();
    } catch (err) {
      console.error(err);
      alert('Error saving project: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm(`Are you sure you want to delete project: ${id}?`)) return;
    setLoading(true);
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);
      if (error) throw error;
      await fetchProjects();
    } catch (err) {
      alert('Error deleting project: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // --- Dynamic Form Add/Remove Array Items ---
  const addTeamMember = () => {
    setProjectForm(prev => ({
      ...prev,
      team: [...prev.team, { name: '', role: '', image: '', linkedin: '' }]
    }));
  };

  const removeTeamMember = (index) => {
    setProjectForm(prev => ({
      ...prev,
      team: prev.team.filter((_, i) => i !== index)
    }));
  };

  const updateTeamMember = (index, field, value) => {
    const newTeam = [...projectForm.team];
    newTeam[index][field] = value;
    setProjectForm(prev => ({ ...prev, team: newTeam }));
  };

  const addProblem = () => {
    setProjectForm(prev => ({
      ...prev,
      problems: [...prev.problems, { title: '', description: '' }]
    }));
  };

  const removeProblem = (index) => {
    setProjectForm(prev => ({
      ...prev,
      problems: prev.problems.filter((_, i) => i !== index)
    }));
  };

  const updateProblem = (index, field, value) => {
    const newProblems = [...projectForm.problems];
    newProblems[index][field] = value;
    setProjectForm(prev => ({ ...prev, problems: newProblems }));
  };

  const addSolution = () => {
    setProjectForm(prev => ({
      ...prev,
      solutions: [...prev.solutions, { title: '', description: '' }]
    }));
  };

  const removeSolution = (index) => {
    setProjectForm(prev => ({
      ...prev,
      solutions: prev.solutions.filter((_, i) => i !== index)
    }));
  };

  const updateSolution = (index, field, value) => {
    const newSolutions = [...projectForm.solutions];
    newSolutions[index][field] = value;
    setProjectForm(prev => ({ ...prev, solutions: newSolutions }));
  };

  const addColor = () => {
    setProjectForm(prev => ({
      ...prev,
      colors: [...prev.colors, { hex: '#000000', name: '' }]
    }));
  };

  const removeColor = (index) => {
    setProjectForm(prev => ({
      ...prev,
      colors: prev.colors.filter((_, i) => i !== index)
    }));
  };

  const updateColor = (index, field, value) => {
    const newColors = [...projectForm.colors];
    newColors[index][field] = value;
    setProjectForm(prev => ({ ...prev, colors: newColors }));
  };

  // --- Achievements & Experiences Handlers ---
  const handleSaveAchievement = async (e) => {
    e.preventDefault();
    if (!achievementForm.company || !achievementForm.role || !achievementForm.date) {
      alert('All fields are required');
      return;
    }
    setLoading(true);
    try {
      if (editingAchievement) {
        const { error } = await supabase
          .from('achievements')
          .update(achievementForm)
          .eq('id', editingAchievement);
        if (error) throw error;
        setEditingAchievement(null);
      } else {
        const { error } = await supabase
          .from('achievements')
          .insert(achievementForm);
        if (error) throw error;
      }
      setAchievementForm({ date: '', company: '', role: '' });
      await fetchAchievements();
    } catch (err) {
      alert('Error saving achievement: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAchievement = async (id) => {
    if (!window.confirm('Delete achievement?')) return;
    setLoading(true);
    try {
      const { error } = await supabase
        .from('achievements')
        .delete()
        .eq('id', id);
      if (error) throw error;
      await fetchAchievements();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveExperience = async (e) => {
    e.preventDefault();
    if (!experienceForm.company || !experienceForm.role || !experienceForm.date) {
      alert('All fields are required');
      return;
    }
    setLoading(true);
    try {
      if (editingExperience) {
        const { error } = await supabase
          .from('experiences')
          .update(experienceForm)
          .eq('id', editingExperience);
        if (error) throw error;
        setEditingExperience(null);
      } else {
        const { error } = await supabase
          .from('experiences')
          .insert(experienceForm);
        if (error) throw error;
      }
      setExperienceForm({ date: '', company: '', role: '', is_active: false });
      setStartMonth('Jan');
      setStartYear('2025');
      setEndMonth('Jan');
      setEndYear('2025');
      await fetchExperiences();
    } catch (err) {
      alert('Error saving experience: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteExperience = async (id) => {
    if (!window.confirm('Delete experience?')) return;
    setLoading(true);
    try {
      const { error } = await supabase
        .from('experiences')
        .delete()
        .eq('id', id);
      if (error) throw error;
      await fetchExperiences();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Education Handlers
  const handleSaveEducation = async (e) => {
    e.preventDefault();
    if (!educationForm.institution || !educationForm.degree || !educationForm.date) {
      alert('All fields are required');
      return;
    }
    setLoading(true);
    try {
      if (editingEducation) {
        const { error } = await supabase
          .from('education')
          .update(educationForm)
          .eq('id', editingEducation);
        if (error) throw error;
        setEditingEducation(null);
      } else {
        const { error } = await supabase
          .from('education')
          .insert(educationForm);
        if (error) throw error;
      }
      setEducationForm({ date: '', institution: '', degree: '', is_active: false });
      setEduStartYear('2023');
      setEduEndYear('2027');
      await fetchEducation();
    } catch (err) {
      alert('Error saving education: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEducation = async (id) => {
    if (!window.confirm('Delete education entry?')) return;
    setLoading(true);
    try {
      const { error } = await supabase
        .from('education')
        .delete()
        .eq('id', id);
      if (error) throw error;
      await fetchEducation();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Work Handlers
  const handleSaveWork = async (e) => {
    e.preventDefault();
    if (!workForm.institution || !workForm.position || !workForm.date) {
      alert('All fields are required');
      return;
    }
    setLoading(true);
    try {
      if (editingWork) {
        const { error } = await supabase
          .from('work')
          .update(workForm)
          .eq('id', editingWork);
        if (error) throw error;
        setEditingWork(null);
      } else {
        const { error } = await supabase
          .from('work')
          .insert(workForm);
        if (error) throw error;
      }
      setWorkForm({ date: '', institution: '', position: '', is_active: false });
      setWorkStartMonth('Jan');
      setWorkStartYear('2025');
      setWorkEndMonth('Jan');
      setWorkEndYear('2025');
      await fetchWork();
    } catch (err) {
      alert('Error saving work: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteWork = async (id) => {
    if (!window.confirm('Delete work entry?')) return;
    setLoading(true);
    try {
      const { error } = await supabase
        .from('work')
        .delete()
        .eq('id', id);
      if (error) throw error;
      await fetchWork();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // --- Rendering Functions ---

  if (loading && !session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 animate-spin text-black" />
          <p className="text-gray-500 font-medium">Checking session...</p>
        </div>
      </div>
    );
  }

  // --- RENDER LOGIN IF NOT AUTHENTICATED ---
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8 bg-white border border-gray-100 p-8 rounded-2xl shadow-xl"
        >
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-black text-white flex items-center justify-center rounded-xl">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900 tracking-tight">Admin Portal</h2>
            <p className="mt-2 text-sm text-gray-500">
              Sign in to update your portfolio details.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            {authError && (
              <div className="bg-red-50 text-red-600 text-sm p-4 rounded-xl border border-red-100 font-medium">
                {authError}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-black transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={authLoading}
                className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-black hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all disabled:opacity-50"
              >
                {authLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Access CMS Dashboard"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }

  // --- RENDER AUTHENTICATED CMS ---
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 pb-6 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-extrabold tracking-tight">Portfolio Control Panel</h1>
          </div>
          <p className="text-gray-500 text-sm mt-1">Hello, Faiz. Customize your website layout and contents in real-time.</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm font-semibold bg-white border border-gray-200 px-4 py-2.5 rounded-xl hover:bg-gray-50 hover:text-red-500 transition-colors shadow-sm"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto gap-2">
        <button
          onClick={() => { setActiveTab('projects'); resetProjectForm(); }}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-semibold text-sm transition-all whitespace-nowrap ${activeTab === 'projects'
            ? 'border-black text-black'
            : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
        >
          <FolderKanban className="w-4 h-4" />
          Projects ({projects.length})
        </button>
        <button
          onClick={() => { setActiveTab('achievements'); setEditingAchievement(null); }}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-semibold text-sm transition-all whitespace-nowrap ${activeTab === 'achievements'
            ? 'border-black text-black'
            : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
        >
          <Award className="w-4 h-4" />
          Achievements ({achievements.length})
        </button>
        <button
          onClick={() => { setActiveTab('experiences'); setEditingExperience(null); }}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-semibold text-sm transition-all whitespace-nowrap ${activeTab === 'experiences'
            ? 'border-black text-black'
            : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
        >
          <Briefcase className="w-4 h-4" />
          Experiences ({experiences.length})
        </button>
        <button
          onClick={() => { setActiveTab('education'); setEditingEducation(null); }}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-semibold text-sm transition-all whitespace-nowrap ${activeTab === 'education'
            ? 'border-black text-black'
            : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
        >
          <GraduationCap className="w-4 h-4" />
          Education ({education.length})
        </button>
        <button
          onClick={() => { setActiveTab('work'); setEditingWork(null); }}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-semibold text-sm transition-all whitespace-nowrap ${activeTab === 'work'
            ? 'border-black text-black'
            : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
        >
          <Laptop className="w-4 h-4" />
          Work ({work.length})
        </button>
      </div>

      {/* Main CMS Sections */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-black" />
        </div>
      )}

      {!loading && (
        <div>
          {/* PROJECTS MANAGER */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Projects List (Left Column) */}
              <div className="lg:col-span-1 space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Project List</h2>
                  <button
                    onClick={resetProjectForm}
                    className="flex items-center gap-1.5 bg-black text-white px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    New Project
                  </button>
                </div>

                <div className="space-y-3 overflow-y-auto max-h-[70vh] pr-2">
                  {projects.length === 0 ? (
                    <div className="text-center py-8 text-gray-400 border border-dashed border-gray-200 rounded-xl bg-white">
                      No projects found. Create one.
                    </div>
                  ) : (
                    projects.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => startEditProject(p)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-center ${editingProject === p.id
                          ? 'bg-black text-white border-black shadow-md'
                          : 'bg-white text-black border-gray-100 hover:border-gray-300 shadow-sm'
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          {p.logo_url && (
                            <img src={p.logo_url} alt="" className="w-8 h-8 rounded-md bg-gray-50 object-contain p-0.5" />
                          )}
                          <div>
                            <h4 className="font-bold text-sm">{p.app_name}</h4>
                            <p className={`text-xs ${editingProject === p.id ? 'text-gray-300' : 'text-gray-400'} mt-0.5`}>
                              {p.section} • {p.year}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-1.5" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => startEditProject(p)}
                            className={`p-1.5 rounded-lg border transition-colors ${editingProject === p.id
                              ? 'border-neutral-800 hover:bg-neutral-900 text-gray-300'
                              : 'border-gray-100 hover:bg-gray-50 text-gray-500'
                              }`}
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(p.id)}
                            className="p-1.5 rounded-lg border border-red-100 hover:bg-red-50 text-red-500 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Project Form (Right Columns) */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 border-b border-gray-100 pb-4">
                    {editingProject ? `Edit Project: ${projectForm.app_name}` : 'Create New Project'}
                  </h3>

                  <form onSubmit={handleSaveProject} className="space-y-6">
                    {/* Basic Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          Project ID / Slug (Unique, e.g. cerebellum) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. mitsaq"
                          value={projectForm.id}
                          disabled={!!editingProject}
                          onChange={(e) => setProjectForm({ ...projectForm, id: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          App Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Mitsaq"
                          value={projectForm.app_name}
                          onChange={(e) => setProjectForm({ ...projectForm, app_name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          Full Title (For details page banner)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Mitsaq - Sharia-Based Matchmaking"
                          value={projectForm.title}
                          onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          Year
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 2025"
                          value={projectForm.year}
                          onChange={(e) => setProjectForm({ ...projectForm, year: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          My Role (For Home grid / Work experiences)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Product Design"
                          value={projectForm.role}
                          onChange={(e) => setProjectForm({ ...projectForm, role: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          Primary Color Theme (Hex code without #)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 1C6EA4"
                          value={projectForm.primary_color}
                          onChange={(e) => setProjectForm({ ...projectForm, primary_color: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          Section
                        </label>
                        <select
                          value={projectForm.section}
                          onChange={(e) => setProjectForm({ ...projectForm, section: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        >
                          <option value="UI/UX">UI/UX Design</option>
                          <option value="Website">Website / Code</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between pt-6 border-t border-gray-100/55 md:col-span-2">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-700">Show in Work/Experience Grid (Home)</span>
                          <span className="text-xs text-gray-450 mt-0.5">Toggle to show this project in the landing page's main grid.</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setProjectForm(prev => ({ ...prev, is_work: !prev.is_work }))}
                          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none shadow-sm ${projectForm.is_work ? 'bg-black' : 'bg-gray-200'
                            }`}
                        >
                          <span
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-300 ease-in-out ${projectForm.is_work ? 'translate-x-5' : 'translate-x-0'
                              }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Tags & Description */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Tags (Comma separated)
                      </label>
                      <input
                        type="text"
                        placeholder="UI/UX Design, Islamic App, Figma"
                        value={projectForm.tags}
                        onChange={(e) => setProjectForm({ ...projectForm, tags: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Short Description
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Brief summary shown on grids..."
                        value={projectForm.description}
                        onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    {/* File Uploads for Main Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center gap-1">
                          <ImageIcon className="w-3.5 h-3.5" /> Project Main Image (Grid Card)
                        </label>
                        {projectForm.image_url && (
                          <div className="mb-2 relative w-full h-32 bg-gray-200 rounded-lg overflow-hidden group">
                            <img src={projectForm.image_url} alt="" className="w-full h-full object-cover" />
                            <button
                              type="button"
                              onClick={() => setProjectForm({ ...projectForm, image_url: '' })}
                              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors shadow"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={async (e) => {
                              const file = e.target.files[0];
                              const url = await handleFileUpload(file, 'projects', 'project_image');
                              if (url) setProjectForm(prev => ({ ...prev, image_url: url }));
                            }}
                            className="hidden"
                            id="project-image-file"
                          />
                          <label
                            htmlFor="project-image-file"
                            className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold bg-white border border-gray-200 px-3.5 py-2 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
                          >
                            {uploadingImage.project_image ? (
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            ) : (
                              <Upload className="w-3.5 h-3.5" />
                            )}
                            Upload Card Image
                          </label>
                          <input
                            type="text"
                            placeholder="Or enter image URL directly"
                            value={projectForm.image_url}
                            onChange={(e) => setProjectForm({ ...projectForm, image_url: e.target.value })}
                            className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg text-xs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center gap-1">
                          <ImageIcon className="w-3.5 h-3.5" /> App Logo
                        </label>
                        {projectForm.logo_url && (
                          <div className="mb-2 relative w-16 h-16 bg-gray-200 rounded-lg overflow-hidden group border border-gray-100 flex items-center justify-center p-1">
                            <img src={projectForm.logo_url} alt="" className="w-full h-full object-contain" />
                            <button
                              type="button"
                              onClick={() => setProjectForm({ ...projectForm, logo_url: '' })}
                              className="absolute top-0 right-0 bg-red-500 text-white p-0.5 rounded-full hover:bg-red-600 transition-colors shadow"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={async (e) => {
                              const file = e.target.files[0];
                              const url = await handleFileUpload(file, 'logos', 'project_logo');
                              if (url) setProjectForm(prev => ({ ...prev, logo_url: url }));
                            }}
                            className="hidden"
                            id="project-logo-file"
                          />
                          <label
                            htmlFor="project-logo-file"
                            className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold bg-white border border-gray-200 px-3.5 py-2 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
                          >
                            {uploadingImage.project_logo ? (
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            ) : (
                              <Upload className="w-3.5 h-3.5" />
                            )}
                            Upload Logo
                          </label>
                          <input
                            type="text"
                            placeholder="Or enter logo URL"
                            value={projectForm.logo_url}
                            onChange={(e) => setProjectForm({ ...projectForm, logo_url: e.target.value })}
                            className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg text-xs"
                          />
                        </div>
                      </div>
                    </div>

                    {/* --- DETAILS PAGE CONFIGURATION SECTION --- */}
                    <div className="border-t border-gray-200 pt-6 mt-8">
                      <h4 className="text-base font-extrabold text-gray-800 mb-4 flex items-center gap-2">
                        <Plus className="w-4 h-4 text-indigo-500" /> Detail Page Setup (Dynamic Sections)
                      </h4>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                            Overview / Case Study Introduction
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Provide a detailed overview of the project..."
                            value={projectForm.overview}
                            onChange={(e) => setProjectForm({ ...projectForm, overview: e.target.value })}
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="md:col-span-1">
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                              Timeline Description
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Sep '25 – Oct '25 (1 month)"
                              value={projectForm.timeline}
                              onChange={(e) => setProjectForm({ ...projectForm, timeline: e.target.value })}
                              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                          </div>
                          <div className="md:col-span-1">
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                              Tools Used (Comma separated)
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Figma, clickup, maze"
                              value={projectForm.tools}
                              onChange={(e) => setProjectForm({ ...projectForm, tools: e.target.value })}
                              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                          </div>
                          <div className="md:col-span-1">
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                              My Roles (Detail screen, comma separated)
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. UX & UI Design, UX Research"
                              value={projectForm.role_list}
                              onChange={(e) => setProjectForm({ ...projectForm, role_list: e.target.value })}
                              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                            Figma Prototype Embed Link
                          </label>
                          <input
                            type="text"
                            placeholder="https://embed.figma.com/proto/..."
                            value={projectForm.figma_link}
                            onChange={(e) => setProjectForm({ ...projectForm, figma_link: e.target.value })}
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black font-mono text-xs"
                          />
                        </div>

                        {/* Team Section */}
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <div className="flex justify-between items-center mb-3">
                            <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                              <UserPlus className="w-3.5 h-3.5" /> Team Members ({projectForm.team.length})
                            </h5>
                            <button
                              type="button"
                              onClick={addTeamMember}
                              className="flex items-center gap-1 text-[10px] font-semibold bg-white border border-gray-200 px-2 py-1 rounded shadow-sm hover:bg-gray-100"
                            >
                              <Plus className="w-3 h-3" /> Add Member
                            </button>
                          </div>

                          <div className="space-y-3">
                            {projectForm.team.map((member, idx) => (
                              <div key={idx} className="grid grid-cols-1 sm:grid-cols-4 gap-2 bg-white p-3 rounded-lg border border-gray-200 items-end">
                                <div>
                                  <label className="block text-[10px] text-gray-400">Name</label>
                                  <input
                                    type="text"
                                    value={member.name}
                                    placeholder="Jane Doe"
                                    onChange={(e) => updateTeamMember(idx, 'name', e.target.value)}
                                    className="w-full border-b border-gray-200 py-1 text-xs focus:outline-none"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] text-gray-400">Role</label>
                                  <input
                                    type="text"
                                    value={member.role}
                                    placeholder="UI Designer"
                                    onChange={(e) => updateTeamMember(idx, 'role', e.target.value)}
                                    className="w-full border-b border-gray-200 py-1 text-xs focus:outline-none"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] text-gray-400">LinkedIn URL</label>
                                  <input
                                    type="text"
                                    value={member.linkedin}
                                    placeholder="https://..."
                                    onChange={(e) => updateTeamMember(idx, 'linkedin', e.target.value)}
                                    className="w-full border-b border-gray-200 py-1 text-xs focus:outline-none text-gray-500"
                                  />
                                </div>
                                <div className="flex items-center gap-1 justify-between">
                                  <div className="flex-1">
                                    <label className="block text-[10px] text-gray-400">Profile Image</label>
                                    <div className="flex items-center gap-1">
                                      <input
                                        type="file"
                                        accept="image/*"
                                        id={`team-member-img-${idx}`}
                                        className="hidden"
                                        onChange={async (e) => {
                                          const url = await handleFileUpload(e.target.files[0], 'team', 'team_member_image', idx);
                                          if (url) updateTeamMember(idx, 'image', url);
                                        }}
                                      />
                                      <label
                                        htmlFor={`team-member-img-${idx}`}
                                        className="cursor-pointer bg-gray-100 hover:bg-gray-200 p-1.5 rounded text-[10px] flex items-center justify-center font-bold"
                                      >
                                        {uploadingImage.team_member_image[idx] ? (
                                          <Loader2 className="w-3 h-3 animate-spin" />
                                        ) : (
                                          <Upload className="w-3 h-3" />
                                        )}
                                      </label>
                                      <input
                                        type="text"
                                        value={member.image}
                                        placeholder="URL"
                                        onChange={(e) => updateTeamMember(idx, 'image', e.target.value)}
                                        className="w-full text-[10px] border-b border-gray-200 focus:outline-none"
                                      />
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => removeTeamMember(idx)}
                                    className="p-1.5 text-red-500 hover:bg-red-50 rounded"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Problems Section */}
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <div className="flex justify-between items-center mb-3">
                            <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                              Problems / Pain Points ({projectForm.problems.length})
                            </h5>
                            <button
                              type="button"
                              onClick={addProblem}
                              className="flex items-center gap-1 text-[10px] font-semibold bg-white border border-gray-200 px-2 py-1 rounded shadow-sm hover:bg-gray-100"
                            >
                              <Plus className="w-3 h-3" /> Add Problem
                            </button>
                          </div>
                          <div className="space-y-3">
                            {projectForm.problems.map((prob, idx) => (
                              <div key={idx} className="bg-white p-3 rounded-lg border border-gray-200 space-y-2 relative">
                                <button
                                  type="button"
                                  onClick={() => removeProblem(idx)}
                                  className="absolute top-2 right-2 p-1 text-red-500 hover:bg-red-50 rounded"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                                <input
                                  type="text"
                                  value={prob.title}
                                  placeholder="Problem Title (e.g. Curricula Mismatch)"
                                  onChange={(e) => updateProblem(idx, 'title', e.target.value)}
                                  className="w-[90%] border-b border-gray-100 font-semibold py-1 text-xs focus:outline-none"
                                />
                                <textarea
                                  rows={2}
                                  value={prob.description}
                                  placeholder="Explanation..."
                                  onChange={(e) => updateProblem(idx, 'description', e.target.value)}
                                  className="w-full py-1 text-xs focus:outline-none resize-none"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Solutions Section */}
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <div className="flex justify-between items-center mb-3">
                            <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                              Solutions ({projectForm.solutions.length})
                            </h5>
                            <button
                              type="button"
                              onClick={addSolution}
                              className="flex items-center gap-1 text-[10px] font-semibold bg-white border border-gray-200 px-2 py-1 rounded shadow-sm hover:bg-gray-100"
                            >
                              <Plus className="w-3 h-3" /> Add Solution
                            </button>
                          </div>
                          <div className="space-y-3">
                            {projectForm.solutions.map((sol, idx) => (
                              <div key={idx} className="bg-white p-3 rounded-lg border border-gray-200 space-y-2 relative">
                                <button
                                  type="button"
                                  onClick={() => removeSolution(idx)}
                                  className="absolute top-2 right-2 p-1 text-red-500 hover:bg-red-50 rounded"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                                <input
                                  type="text"
                                  value={sol.title}
                                  placeholder="Solution Title (e.g. AI Mock Interview)"
                                  onChange={(e) => updateSolution(idx, 'title', e.target.value)}
                                  className="w-[90%] border-b border-gray-100 font-semibold py-1 text-xs focus:outline-none"
                                />
                                <textarea
                                  rows={2}
                                  value={sol.description}
                                  placeholder="Explanation..."
                                  onChange={(e) => updateSolution(idx, 'description', e.target.value)}
                                  className="w-full py-1 text-xs focus:outline-none resize-none"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Typography & Colors */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Colors */}
                          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <div className="flex justify-between items-center mb-3">
                              <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                Color Palette ({projectForm.colors.length})
                              </h5>
                              <button
                                type="button"
                                onClick={addColor}
                                className="flex items-center gap-1 text-[10px] font-semibold bg-white border border-gray-200 px-2 py-1 rounded shadow-sm hover:bg-gray-100"
                              >
                                <Plus className="w-3 h-3" /> Add Color
                              </button>
                            </div>
                            <div className="space-y-2">
                              {projectForm.colors.map((color, idx) => (
                                <div key={idx} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-gray-200">
                                  <input
                                    type="color"
                                    value={color.hex}
                                    onChange={(e) => updateColor(idx, 'hex', e.target.value)}
                                    className="w-8 h-8 rounded border border-gray-200 cursor-pointer p-0"
                                  />
                                  <input
                                    type="text"
                                    value={color.hex}
                                    placeholder="#HEX"
                                    onChange={(e) => updateColor(idx, 'hex', e.target.value)}
                                    className="w-20 px-2 py-1 text-xs border border-gray-100 rounded focus:outline-none font-mono"
                                  />
                                  <input
                                    type="text"
                                    value={color.name}
                                    placeholder="Primary / White"
                                    onChange={(e) => updateColor(idx, 'name', e.target.value)}
                                    className="flex-1 px-2 py-1 text-xs border border-gray-100 rounded focus:outline-none"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => removeColor(idx)}
                                    className="p-1 text-red-500 hover:bg-red-50 rounded"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Typography */}
                          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-3">
                            <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                              Typography Config
                            </h5>
                            <div>
                              <label className="block text-[10px] text-gray-400 mb-0.5">Font Family Name</label>
                              <input
                                type="text"
                                placeholder="e.g. Inter / Poppins / SF Pro"
                                value={projectForm.typography_font}
                                onChange={(e) => setProjectForm({ ...projectForm, typography_font: e.target.value })}
                                className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] text-gray-400 mb-0.5">Typography Rationale</label>
                              <textarea
                                rows={3}
                                placeholder="Why this font family was chosen..."
                                value={projectForm.typography_desc}
                                onChange={(e) => setProjectForm({ ...projectForm, typography_desc: e.target.value })}
                                className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs resize-none"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Bento Details & Result Images Grid */}
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-4">
                          <div>
                            <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1">
                              <ImageIcon className="w-3.5 h-3.5 text-indigo-500" /> Bento & Result Images (Usually 3 images)
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
                              {projectForm.bento_images.map((imgUrl, idx) => (
                                <div key={idx} className="relative aspect-video bg-gray-200 border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                                  <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updated = projectForm.bento_images.filter((_, i) => i !== idx);
                                      setProjectForm({ ...projectForm, bento_images: updated });
                                    }}
                                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 shadow transition-colors"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </div>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              <input
                                type="file"
                                accept="image/*"
                                multiple
                                id="bento-image-upload"
                                className="hidden"
                                onChange={async (e) => {
                                  const files = Array.from(e.target.files);
                                  const uploadedUrls = [];
                                  for (const file of files) {
                                    const url = await handleFileUpload(file, 'bento', 'bento');
                                    if (url) uploadedUrls.push(url);
                                  }
                                  setProjectForm(prev => ({
                                    ...prev,
                                    bento_images: [...prev.bento_images, ...uploadedUrls]
                                  }));
                                }}
                              />
                              <label
                                htmlFor="bento-image-upload"
                                className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
                              >
                                {uploadingImage.bento ? (
                                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                ) : (
                                  <Upload className="w-3.5 h-3.5" />
                                )}
                                Upload Bento Images
                              </label>
                            </div>
                          </div>

                          <div className="border-t border-gray-200 pt-4">
                            <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1">
                              <ImageIcon className="w-3.5 h-3.5 text-indigo-500" /> Design System Images
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
                              {projectForm.design_system_images.map((imgUrl, idx) => (
                                <div key={idx} className="relative aspect-video bg-gray-200 border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                                  <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updated = projectForm.design_system_images.filter((_, i) => i !== idx);
                                      setProjectForm({ ...projectForm, design_system_images: updated });
                                    }}
                                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 shadow transition-colors"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </div>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              <input
                                type="file"
                                accept="image/*"
                                multiple
                                id="ds-image-upload"
                                className="hidden"
                                onChange={async (e) => {
                                  const files = Array.from(e.target.files);
                                  const uploadedUrls = [];
                                  for (const file of files) {
                                    const url = await handleFileUpload(file, 'design-systems', 'design_system');
                                    if (url) uploadedUrls.push(url);
                                  }
                                  setProjectForm(prev => ({
                                    ...prev,
                                    design_system_images: [...prev.design_system_images, ...uploadedUrls]
                                  }));
                                }}
                              />
                              <label
                                htmlFor="ds-image-upload"
                                className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
                              >
                                {uploadingImage.design_system ? (
                                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                ) : (
                                  <Upload className="w-3.5 h-3.5" />
                                )}
                                Upload Design System Images
                              </label>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                      <button
                        type="button"
                        onClick={resetProjectForm}
                        className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-50 hover:text-black transition-colors"
                      >
                        Cancel / Reset
                      </button>
                      <button
                        type="submit"
                        className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-neutral-800 transition-all shadow-md"
                      >
                        <Check className="w-4 h-4" />
                        Save Project
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* ACHIEVEMENTS MANAGER */}
          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Form Card */}
              <div className="md:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-fit">
                <h3 className="text-lg font-bold mb-4">
                  {editingAchievement ? 'Edit Achievement' : 'Add Achievement'}
                </h3>
                <form onSubmit={handleSaveAchievement} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Year</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2025"
                      value={achievementForm.date}
                      onChange={(e) => setAchievementForm({ ...achievementForm, date: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Organizer / Institution</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Universitas Brawijaya"
                      value={achievementForm.company}
                      onChange={(e) => setAchievementForm({ ...achievementForm, company: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Award Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1st Place Winner, UI/UX Competition"
                      value={achievementForm.role}
                      onChange={(e) => setAchievementForm({ ...achievementForm, role: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-black text-white py-2 rounded-xl text-xs font-semibold hover:bg-neutral-800 transition-colors"
                    >
                      {editingAchievement ? 'Update' : 'Save Achievement'}
                    </button>
                    {editingAchievement && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingAchievement(null);
                          setAchievementForm({ date: '', company: '', role: '' });
                        }}
                        className="px-3 border border-gray-200 rounded-xl text-xs text-gray-500 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Data Table */}
              <div className="md:col-span-2 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4">Current Achievements</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-500">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-50 rounded-lg">
                      <tr>
                        <th className="px-4 py-3">Year</th>
                        <th className="px-4 py-3">Organizer</th>
                        <th className="px-4 py-3">Title</th>
                        <th className="px-4 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {achievements.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="text-center py-8 text-gray-400">
                            No achievements added.
                          </td>
                        </tr>
                      ) : (
                        achievements.map((item) => (
                          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 font-semibold text-black">{item.date}</td>
                            <td className="px-4 py-3 text-gray-700">{item.company}</td>
                            <td className="px-4 py-3 text-gray-600">{item.role}</td>
                            <td className="px-4 py-3 text-right space-x-1.5">
                              <button
                                onClick={() => {
                                  setEditingAchievement(item.id);
                                  setAchievementForm({ date: item.date, company: item.company, role: item.role });
                                }}
                                className="p-1 hover:bg-gray-100 rounded text-gray-500 inline-flex items-center"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteAchievement(item.id)}
                                className="p-1 hover:bg-red-50 rounded text-red-500 inline-flex items-center"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* EXPERIENCES MANAGER */}
          {activeTab === 'experiences' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Form Card */}
              <div className="md:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-fit">
                <h3 className="text-lg font-bold mb-4">
                  {editingExperience ? 'Edit Experience' : 'Add Experience'}
                </h3>
                <form onSubmit={handleSaveExperience} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Date Period</label>

                    {/* Start Date */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div>
                        <span className="block text-[10px] text-gray-400 mb-0.5">Start Month</span>
                        <select
                          value={startMonth}
                          onChange={(e) => setStartMonth(e.target.value)}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                        >
                          {months.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </div>
                      <div>
                        <span className="block text-[10px] text-gray-400 mb-0.5">Start Year</span>
                        <select
                          value={startYear}
                          onChange={(e) => setStartYear(e.target.value)}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                        >
                          {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* End Date (Only show if NOT still active) */}
                    {!experienceForm.is_active && (
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div>
                          <span className="block text-[10px] text-gray-400 mb-0.5">End Month</span>
                          <select
                            value={endMonth}
                            onChange={(e) => setEndMonth(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                          >
                            {months.map(m => <option key={m} value={m}>{m}</option>)}
                          </select>
                        </div>
                        <div>
                          <span className="block text-[10px] text-gray-400 mb-0.5">End Year</span>
                          <select
                            value={endYear}
                            onChange={(e) => setEndYear(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                          >
                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Checkbox Still Active */}
                    <div className="flex items-center gap-2.5 py-2 mb-3">
                      <input
                        type="checkbox"
                        id="is_active_exp"
                        checked={experienceForm.is_active}
                        onChange={(e) => setExperienceForm({ ...experienceForm, is_active: e.target.checked })}
                        className="h-4.5 w-4.5 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                      />
                      <label htmlFor="is_active_exp" className="text-[10px] font-bold text-gray-500 uppercase tracking-wider cursor-pointer select-none">
                        Still Active (Green Pulsing Dot)
                      </label>
                    </div>

                    {/* Selected Period Preview Box */}
                    <div className="text-xs bg-gray-50 border border-gray-200 p-3 rounded-xl flex justify-between items-center text-gray-500 mb-4">
                      <span>Selected Period:</span>
                      <strong className="font-semibold text-black">{experienceForm.date}</strong>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Organization / Company</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. RAION Community"
                      value={experienceForm.company}
                      onChange={(e) => setExperienceForm({ ...experienceForm, company: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Position / Role</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. UI/UX Designer Staff"
                      value={experienceForm.role}
                      onChange={(e) => setExperienceForm({ ...experienceForm, role: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>


                  <div className="flex gap-2 pt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-black text-white py-2 rounded-xl text-xs font-semibold hover:bg-neutral-800 transition-colors"
                    >
                      {editingExperience ? 'Update' : 'Save Experience'}
                    </button>
                    {editingExperience && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingExperience(null);
                          setExperienceForm({ date: '', company: '', role: '', is_active: false });
                          setStartMonth('Jan');
                          setStartYear('2025');
                          setEndMonth('Jan');
                          setEndYear('2025');
                        }}
                        className="px-3 border border-gray-200 rounded-xl text-xs text-gray-500 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Data Table */}
              <div className="md:col-span-2 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4">Current Experiences</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-500">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-50 rounded-lg">
                      <tr>
                        <th className="px-4 py-3">Period</th>
                        <th className="px-4 py-3">Organization</th>
                        <th className="px-4 py-3">Role</th>
                        <th className="px-4 py-3">Active</th>
                        <th className="px-4 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {experiences.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="text-center py-8 text-gray-400">
                            No experience entries found.
                          </td>
                        </tr>
                      ) : (
                        experiences.map((item) => (
                          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 font-semibold text-black">{item.date}</td>
                            <td className="px-4 py-3 text-gray-700">{item.company}</td>
                            <td className="px-4 py-3 text-gray-600">{item.role}</td>
                            <td className="px-4 py-3">
                              {item.is_active ? (
                                <span className="px-2 py-0.5 text-[10px] font-bold text-green-700 bg-green-50 rounded border border-green-150">Active</span>
                              ) : (
                                <span className="px-2 py-0.5 text-[10px] font-bold text-gray-400 bg-gray-50 rounded border border-gray-200">Past</span>
                              )}
                            </td>
                            <td className="px-4 py-3 text-right space-x-1.5">
                              <button
                                onClick={() => {
                                  setEditingExperience(item.id);
                                  const parsed = parsePeriod(item.date);
                                  setStartMonth(parsed.startM);
                                  setStartYear(parsed.startY);
                                  setEndMonth(parsed.endM);
                                  setEndYear(parsed.endY);
                                  setExperienceForm({ date: item.date, company: item.company, role: item.role, is_active: item.is_active });
                                }}
                                className="p-1 hover:bg-gray-100 rounded text-gray-500 inline-flex items-center"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteExperience(item.id)}
                                className="p-1 hover:bg-red-50 rounded text-red-500 inline-flex items-center"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* EDUCATION MANAGER */}
          {activeTab === 'education' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Form Card */}
              <div className="md:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-fit">
                <h3 className="text-lg font-bold mb-4">
                  {editingEducation ? 'Edit Education' : 'Add Education'}
                </h3>
                <form onSubmit={handleSaveEducation} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Date Period</label>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div>
                        <span className="block text-[10px] text-gray-400 mb-0.5">Start Year</span>
                        <select
                          value={eduStartYear}
                          onChange={(e) => setEduStartYear(e.target.value)}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                        >
                          {eduYears.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                      <div>
                        <span className="block text-[10px] text-gray-400 mb-0.5">End Year</span>
                        {educationForm.is_active ? (
                          <div className="w-full h-[34px] px-3 bg-gray-100 border border-gray-200 rounded-xl text-xs font-bold text-gray-400 flex items-center justify-center select-none">
                            Present
                          </div>
                        ) : (
                          <select
                            value={eduEndYear}
                            onChange={(e) => setEduEndYear(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                          >
                            {eduYears.map(y => <option key={y} value={y}>{y}</option>)}
                          </select>
                        )}
                      </div>
                    </div>

                    {/* Selected Period Preview Box */}
                    <div className="text-xs bg-gray-50 border border-gray-200 p-3 rounded-xl flex justify-between items-center text-gray-500 mb-4">
                      <span>Selected Period:</span>
                      <strong className="font-semibold text-black">{educationForm.date}</strong>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Institution / School</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Universitas Brawijaya"
                      value={educationForm.institution}
                      onChange={(e) => setEducationForm({ ...educationForm, institution: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Degree / Certificate</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bachelor's Degree, Computer Science"
                      value={educationForm.degree}
                      onChange={(e) => setEducationForm({ ...educationForm, degree: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  
                  {/* Still Active Toggle */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-750">Currently Studying</span>
                      <span className="text-[10px] text-gray-400 mt-0.5">Toggle if you are currently studying here.</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setEducationForm(prev => ({ ...prev, is_active: !prev.is_active }))}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none shadow-sm ${
                        educationForm.is_active ? 'bg-black' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-300 ease-in-out ${
                          educationForm.is_active ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-black text-white py-2 rounded-xl text-xs font-semibold hover:bg-neutral-800 transition-colors"
                    >
                      {editingEducation ? 'Update' : 'Save Education'}
                    </button>
                    {editingEducation && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingEducation(null);
                          setEducationForm({ date: '', institution: '', degree: '', is_active: false });
                          setEduStartYear('2023');
                          setEduEndYear('2027');
                        }}
                        className="px-3 border border-gray-200 rounded-xl text-xs text-gray-500 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Data Table */}
              <div className="md:col-span-2 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4">Current Education</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-500">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-50 rounded-lg">
                      <tr>
                        <th className="px-4 py-3">Period</th>
                        <th className="px-4 py-3">Institution</th>
                        <th className="px-4 py-3">Degree</th>
                        <th className="px-4 py-3">Active</th>
                        <th className="px-4 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {education.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="text-center py-8 text-gray-400">
                            No education entries found.
                          </td>
                        </tr>
                      ) : (
                        education.map((item) => (
                          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 font-semibold text-black">{item.date}</td>
                            <td className="px-4 py-3 text-gray-700">{item.institution}</td>
                            <td className="px-4 py-3 text-gray-600">{item.degree}</td>
                            <td className="px-4 py-3">
                              {item.is_active ? (
                                <span className="px-2 py-0.5 text-[10px] font-bold text-green-700 bg-green-50 rounded border border-green-150">Active</span>
                              ) : (
                                <span className="px-2 py-0.5 text-[10px] font-bold text-gray-400 bg-gray-50 rounded border border-gray-200">Past</span>
                              )}
                            </td>
                            <td className="px-4 py-3 text-right space-x-1.5">
                              <button
                                onClick={() => {
                                  setEditingEducation(item.id);
                                  const parsed = parseEduPeriod(item.date);
                                  setEduStartYear(parsed.startY);
                                  setEduEndYear(parsed.endY);
                                  setEducationForm({ date: item.date, institution: item.institution, degree: item.degree, is_active: item.is_active });
                                }}
                                className="p-1 hover:bg-gray-100 rounded text-gray-500 inline-flex items-center"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteEducation(item.id)}
                                className="p-1 hover:bg-red-50 rounded text-red-500 inline-flex items-center"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* WORK MANAGER */}
          {activeTab === 'work' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Form Card */}
              <div className="md:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-fit">
                <h3 className="text-lg font-bold mb-4">
                  {editingWork ? 'Edit Work' : 'Add Work'}
                </h3>
                <form onSubmit={handleSaveWork} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Date Period</label>
                    
                    {/* Start Date */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div>
                        <span className="block text-[10px] text-gray-400 mb-0.5">Start Month</span>
                        <select
                          value={workStartMonth}
                          onChange={(e) => setWorkStartMonth(e.target.value)}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                        >
                          {months.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </div>
                      <div>
                        <span className="block text-[10px] text-gray-400 mb-0.5">Start Year</span>
                        <select
                          value={workStartYear}
                          onChange={(e) => setWorkStartYear(e.target.value)}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                        >
                          {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* End Date (Only show if NOT still active) */}
                    {!workForm.is_active ? (
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div>
                          <span className="block text-[10px] text-gray-400 mb-0.5">End Month</span>
                          <select
                            value={workEndMonth}
                            onChange={(e) => setWorkEndMonth(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                          >
                            {months.map(m => <option key={m} value={m}>{m}</option>)}
                          </select>
                        </div>
                        <div>
                          <span className="block text-[10px] text-gray-400 mb-0.5">End Year</span>
                          <select
                            value={workEndYear}
                            onChange={(e) => setWorkEndYear(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                          >
                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                          </select>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-3">
                        <span className="block text-[10px] text-gray-400 mb-0.5">End Date</span>
                        <div className="w-full h-[34px] px-3 bg-gray-100 border border-gray-200 rounded-xl text-xs font-bold text-gray-400 flex items-center justify-center select-none">
                          Present
                        </div>
                      </div>
                    )}

                    {/* Selected Period Preview Box */}
                    <div className="text-xs bg-gray-50 border border-gray-200 p-3 rounded-xl flex justify-between items-center text-gray-500 mb-4">
                      <span>Selected Period:</span>
                      <strong className="font-semibold text-black">{workForm.date}</strong>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Institution / Company</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sequrra"
                      value={workForm.institution}
                      onChange={(e) => setWorkForm({ ...workForm, institution: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Position / Role</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Frontend Developer Intern"
                      value={workForm.position}
                      onChange={(e) => setWorkForm({ ...workForm, position: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  {/* Still Active Toggle */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-700">Currently Working Here</span>
                      <span className="text-[10px] text-gray-400 mt-0.5">Toggle if you currently work in this role.</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setWorkForm(prev => ({ ...prev, is_active: !prev.is_active }))}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none shadow-sm ${
                        workForm.is_active ? 'bg-black' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-300 ease-in-out ${
                          workForm.is_active ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-black text-white py-2 rounded-xl text-xs font-semibold hover:bg-neutral-800 transition-colors"
                    >
                      {editingWork ? 'Update' : 'Save Work'}
                    </button>
                    {editingWork && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingWork(null);
                          setWorkForm({ date: '', institution: '', position: '', is_active: false });
                          setWorkStartMonth('Jan');
                          setWorkStartYear('2025');
                          setWorkEndMonth('Jan');
                          setWorkEndYear('2025');
                        }}
                        className="px-3 border border-gray-200 rounded-xl text-xs text-gray-500 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Data Table */}
              <div className="md:col-span-2 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4">Current Work Experience</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-500">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-50 rounded-lg">
                      <tr>
                        <th className="px-4 py-3">Period</th>
                        <th className="px-4 py-3">Institution / Company</th>
                        <th className="px-4 py-3">Position</th>
                        <th className="px-4 py-3">Active</th>
                        <th className="px-4 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {work.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="text-center py-8 text-gray-400">
                            No work entries found.
                          </td>
                        </tr>
                      ) : (
                        work.map((item) => (
                          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 font-semibold text-black">{item.date}</td>
                            <td className="px-4 py-3 text-gray-700">{item.institution}</td>
                            <td className="px-4 py-3 text-gray-600">{item.position}</td>
                            <td className="px-4 py-3">
                              {item.is_active ? (
                                <span className="px-2 py-0.5 text-[10px] font-bold text-green-700 bg-green-50 rounded border border-green-150">Active</span>
                              ) : (
                                <span className="px-2 py-0.5 text-[10px] font-bold text-gray-400 bg-gray-50 rounded border border-gray-200">Past</span>
                              )}
                            </td>
                            <td className="px-4 py-3 text-right space-x-1.5">
                              <button
                                onClick={() => {
                                  setEditingWork(item.id);
                                  const parsed = parseWorkPeriod(item.date);
                                  setWorkStartMonth(parsed.startM);
                                  setWorkStartYear(parsed.startY);
                                  setWorkEndMonth(parsed.endM);
                                  setWorkEndYear(parsed.endY);
                                  setWorkForm({ date: item.date, institution: item.institution, position: item.position, is_active: item.is_active });
                                }}
                                className="p-1 hover:bg-gray-100 rounded text-gray-500 inline-flex items-center"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteWork(item.id)}
                                className="p-1 hover:bg-red-50 rounded text-red-500 inline-flex items-center"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
