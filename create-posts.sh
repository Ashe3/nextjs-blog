#!/bin/bash

posts=(
    "post-1.md|The Rise of AI in Everyday Life|Exploring how artificial intelligence is changing the world around us.|2025-01-10"
    "post-2.md|Mastering Next.js 13|A guide to the latest features in Next.js 13 for modern web development.|2025-01-11"
    "post-3.md|Understanding TypeScript Generics|An introduction to using generics for better type safety.|2025-01-12"
    "post-4.md|Web Accessibility Basics|Why making your website accessible is crucial in 2025.|2025-01-13"
    "post-5.md|Introduction to Tailwind CSS|Learn how to rapidly style your web projects with Tailwind CSS.|2025-01-14"
    "post-6.md|React Server Components Explained|Dive into the benefits and use cases of React Server Components.|2025-01-15"
    "post-7.md|Optimizing Web Performance|Tips and tricks to boost your website's performance.|2025-01-16"
    "post-8.md|GraphQL vs. REST: Which to Choose?|A comparison of GraphQL and REST for building APIs.|2025-01-17"
    "post-9.md|The Future of JavaScript|What lies ahead for the most popular programming language?|2025-01-18"
    "post-10.md|Getting Started with Prisma|A beginner's guide to using Prisma for database management.|2025-01-19"
    "post-11.md|Modern CSS Techniques|Discover powerful CSS tricks to enhance your styling.|2025-01-20"
    "post-12.md|Building Scalable Web Applications|Strategies for creating applications that grow with your users.|2025-01-21"
    "post-13.md|Server-Side Rendering Demystified|Understand the benefits and trade-offs of SSR.|2025-01-22"
    "post-14.md|The Magic of WebAssembly|How WebAssembly is changing web development.|2025-01-23"
    "post-15.md|State Management in React|Choosing the right tools for state management.|2025-01-24"
    "post-16.md|Introduction to Docker|Learn how to containerize your applications.|2025-01-25"
    "post-17.md|Exploring Microservices|Why microservices architecture is trending.|2025-01-26"
    "post-18.md|Testing Strategies for Frontend Developers|How to create reliable test coverage.|2025-01-27"
    "post-19.md|Understanding CI/CD Pipelines|Automating your development workflow.|2025-01-28"
    "post-20.md|API Security Best Practices|Protect your APIs from common vulnerabilities.|2025-01-29"
)

for post in "${posts[@]}"; do
    IFS="|" read -r filename title description date <<< "$post"
    cat <<EOF > src/posts/$filename
---
title: "$title"
description: "$description"
date: "$date"
---

# $title

$description
EOF
done

echo "Posts created successfully!"